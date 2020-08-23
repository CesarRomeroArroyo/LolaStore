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
  showFormaPago: boolean;
  obsequios: any;
  obsequiosShow: any[];
  obserquioSiempre: boolean;
  verificarDesceunto: any;
  formapago: any[];
  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private cartService: CartService
  ) {
    this.showModal = false;
    this.showDescuentos = false;
    this.showFormaPago = false;
    this.obsequiosShow = [];
    this.obserquioSiempre = false;
    this.formapago= [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.total = 0;
    this.discountProd = false;
    this.decuentoAplicado = "prod";
    this.discount = 0;
    this.user = JSON.parse(localStorage.getItem("APP_USER"));
    const prodPedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
		if(prodPedido){
			this.productsGrl = prodPedido;
		} else {
			this.productsGrl = [];
		}
    this.asignarProductos();
    this.firebase.obtener("transversal").subscribe((t) => {
      if(t[0].descuento>0){
        this.discount = t[0].descuento;
      }
      if(t[0].obsequios){
        this.obsequios = t[0].obsequios;
        this.obserquioSiempre = t[0].obsequioinicial;
        this.obtenerObssequios();
      }
      if(t[0].opcionespago){
        this.formapago = t[0].opcionespago;
      }
    });
    this.verificarDescuentoProductos();
  }

  asignarProductos(){
    this.products = JSON.parse(JSON.stringify(this.productsGrl));
    // this.productsTemp = JSON.parse(JSON.stringify(this.productsGrl))
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

  aplicarDesctuentoTransversal(){
    this.products.forEach((prod) => {
      prod.producto.descuento = this.verificarDesceunto[0].valor;
    });
  }

  seleccionarDescuento(desc){
    this.decuentoAplicado=desc;
    if(desc=="store"){
      this.aplicarDesctuentoTienda();
    }
    if(desc=="prod") {
      this.asignarProductos();
    }
    if(desc=="transv") {
      this.aplicarDesctuentoTransversal();
    }
    this.calcularPago();
    this.obtenerObssequios();
    this.domicilio();
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

  obtenerObssequios(){
    this.calcularPago();
    this.obsequiosShow = [];
    const index = this.obsequios.findIndex((data)=> {
      return this.total >= data.desde && this.total <= data.hasta && data.hasta != 999999999;
    });
    console.log(index);
    for (let i = 0; i <= index; i++) {
      this.obsequiosShow.push(this.obsequios[i]);
    }
    console.log(this.obsequiosShow);
  }

  domicilio(){
    const verificar = this.obsequiosShow.filter((o) => {
      return o.domicilio == true;
    });

    this.verificarDesceunto = this.obsequiosShow.filter((o) => {
      return o.descuento == true;
    });

    if(verificar.length > 0){
      return 0;
    }
    return 4000;
  }

  closeModal(e) {
		this.showModal = e;
	}

  closeDescuento(e) {
		this.showDescuentos = e;
	}

  closeModalFormaPAgo(e) {
		this.showFormaPago = e;
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
        this.domicilio();
        this.cartService.administrarProducto(this.productsGrl);
        this.obtenerObssequios();
      }
    });
  }

  finalizarPedido(){
    Swal.fire({
      title: '',
      text: 'Esta seguro de confirmar el pedido?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.guardarPedido();
        this.showFormaPago = true;
      }
    });
  }

  guardarPedido(){
    var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
    var hoy = new Date();
    var dd: string | number = hoy.getDate();
    var mm: string | number = hoy.getMonth()+1;
    var yyyy: string | number = hoy.getFullYear();
    var hora: string | number = hoy.getHours();
    var minuto: string | number = hoy.getMinutes();

    if(dd<10) {
      dd='0'+dd;
    }

    if(mm<10) {
      mm='0'+mm;
    }

    if(minuto<10) {
      minuto='0'+minuto;
    }
    var fecha = dd+'/'+mm+'/'+yyyy;
    console.log(this.products);

    const pedido = {
      productos: this.products, 
      fecha: fecha, 
      hora: hora+':'+ minuto, 
      usuario: usuario, 
      usuarioid: usuario.id,
      descuento: this.decuentoAplicado,
      subtotal: this.calcularPago(),
      domicilio: this.domicilio(),
      total: this.calcularPago()+ this.domicilio(),
      estado: 1
    };
    this.firebase.guardarDatos('pedidos', pedido).then(()=> {
      this.actualizarInventario();
      this.cartService.vaciarCarrito();
      this.productsGrl = [];
      this.asignarProductos();
      this.domicilio();
      this.obtenerObssequios();
      Swal.fire("", "El pedido se guardo correctamente.", "success");
    }).catch(() =>{
      Swal.fire("", "Ocurrio un error al crear el pedido, intentalo mas tarde", "error");
    });
    console.log(pedido);
  }

  actualizarInventario(){

  }
}
