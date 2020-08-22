import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products = [];
  productsTemp = [];
  productsGrl = [];
  discount: number;
  discountProd: boolean;
  decuentoAplicado: string;
  total: number;
  constructor(
    private firebase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.total = 0;
    this.discountProd = false;
    this.decuentoAplicado = "prod";
    this.discount = 0;
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
}
