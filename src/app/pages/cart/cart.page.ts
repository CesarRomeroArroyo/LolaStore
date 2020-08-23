import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@services/firebase.service';
import { UsuarioInterface } from '@interfaces/usuario.interface';
import Swal from 'sweetalert2';
import { CartService } from '@services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products: any[] = [];
  productsTemp: any[] = [];
  productsGrl: any[] = [];
  discount: number;
  discountProd: boolean;
  decuentoAplicado: string;
  total: number;
  user: UsuarioInterface;
  showModal: boolean;
  showDescuentos: boolean;
  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private cartService: CartService
  ) { 
    this.showModal = false;
    this.showDescuentos = false;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.total = 0;
    this.discountProd = false;
    this.decuentoAplicado = "prod";
    this.discount = 0;
    this.user = JSON.parse(localStorage.getItem("APP_USER"));
    const pedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
		if(pedido){
			this.productsGrl = pedido;
		} else {
			this.productsGrl = [];
		}
    this.asignarProductos();
    this.firebase.obtener("transversal").subscribe((t) => {
      if(t[0].descuento>0){
        this.discount = t[0].descuento;
      }
    });
    this.verificarDescuentoProductos();
  }

  asignarProductos(){
    this.products = JSON.parse(JSON.stringify(this.productsGrl))
    this.productsTemp = JSON.parse(JSON.stringify(this.productsGrl))
  }

  irAtras(){
    this.router.navigate(["home"]);
  }

  calcularDescuento(prod){
    if(prod.producto.descuento != 0){
      return (prod.producto.precio-(prod.producto.precio * (prod.producto.descuento/100))) * prod.cantidad;
    }
  }

  verificarDescuentoProductos(){
    this.products.forEach((prod) => {
      if(prod.producto.descuento > 0){
        this.discountProd = true;
      }
    });
  }

  aplicarDesctuentoTienda(){
    this.products.forEach((prod) => {
      prod.producto.descuento = this.discount;
    });
  }

  seleccionarDescuento(desc){
    this.decuentoAplicado=desc;
    if(desc=="store"){
      this.aplicarDesctuentoTienda();
    } else {
      this.asignarProductos();
    }
  }

  calcularPago(){
    this.total = 0;
    this.products.forEach((prod) => {
      if(prod.producto.descuento != 0){
        this.total += (prod.producto.precio-(prod.producto.precio * (prod.producto.descuento/100))) * prod.cantidad;
      } else {
        this.total += prod.producto.precio * prod.cantidad;
      }
    });
    return this.total;
  }

  closeModal(e) {
		this.showModal = e;
	}

  selecAdress(e) {
		this.user.direccion = e;
  }

  quitarProducto(product){

    Swal.fire({
      title: '',
      text: 'Esta seguro de quitar el producto',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.productsGrl.splice(product, 1);
        this.asignarProductos();
        this.cartService.administrarProducto(this.productsGrl);
      }
    });
  }
}
