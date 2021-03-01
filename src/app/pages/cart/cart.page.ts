import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@services/firebase.service';
import { UsuarioInterface } from '@interfaces/usuario.interface';
import Swal from 'sweetalert2';
import { CartService } from '@services/cart.service';
import { Plugins } from '@capacitor/core';
import { UtilsService } from '@services/utils.service';

import { UniqueService } from '@services/unique.service';
import { OneSignalService } from '@services/one-signal.service';
import { LoadingController } from '@ionic/angular';
const { Geolocation } = Plugins;

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
  gps: any = {lon: 0, lat:0};
  domicilios: [];
  store: any;
  verificarDomicilio: any;
  imagen: string;
  fPago: any;
  sinCantidad: any;
  sinCantidades: any;
  valido = true;
  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private cartService: CartService,
    private distanceService: UtilsService,
    private idunico: UniqueService,
    private oneSignal: OneSignalService,
    public loadingController: LoadingController
  ) {
    this.showModal = false;
    this.showDescuentos = false;
    this.showFormaPago = false;
    this.obsequiosShow = [];
    this.obserquioSiempre = false;
    this.formapago= [];
    this.domicilios = [];
    this.store = {};
    this.verificarDomicilio=[];
  }

  ngOnInit() {
    /* const prodPedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
    prodPedido.forEach(prod => {
      this.verificarCantidades(prod);  
    }); */
  }

  async ionViewWillEnter() {
    
    const tienda = await this.firebase.obtenerPromise('usuarios');
    this.store = tienda[0];
    this.total = 0;
    this.discountProd = false;
    this.decuentoAplicado = "prod";
    this.discount = 0;
    this.user = JSON.parse(localStorage.getItem("APP_USER"));
    const prodPedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
    console.log(prodPedido);
		if(prodPedido){
			this.productsGrl = prodPedido;
		} else {
			this.productsGrl = [];
		}
    this.asignarProductos();
    this.verficarData();
    
    
    /* prodPedido.forEach(prod => {
      this.verificarCantidades(prod);  
    }); */
    
    //this.actualizarInventario();
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.gps.lon = coordinates.coords.longitude;
    this.gps.lat = coordinates.coords.latitude;
    
  }

  async verficarData() {
    const t = await this.firebase.obtenerPromise("transversal");
    if(t[0].descuento>0){
      this.discount = t[0].descuento;
    }
    if(t[0].imagenCarrito){
      this.imagen = t[0].imagenCarrito;
    }
    
    if(t[0].opcionespago){
      this.formapago = t[0].opcionespago;
      this.verificarFormasPago();
    }
    if(t[0].domicilios){
      this.domicilios = t[0].domicilios;
    }
    
    if(t[0].obsequios){
      this.obsequios = t[0].obsequios;
      this.obserquioSiempre = t[0].obsequioinicial;
      this.obtenerObssequios();
    }
    if(this.discount > 0){
      this.aplicarDesctuentoTienda()
    } else {
      this.verificarDesceunto = this.obsequios.filter((o) => {
        return o.descuento == "true";
      });
      var total = this.calcularPago();
      if(this.verificarDesceunto.length > 0){
        if(total >= this.verificarDesceunto[0].desde && total <= this.verificarDesceunto[0].hasta){
          this.aplicarDesctuentoTransversal();
        } else {
          this.verificarDescuentoProductos();
        } 
      } else {
        this.verificarDescuentoProductos();
      }
    }
  }

  verificarFormasPago(){
    console.log(this.user);
    console.log(this.formapago);
    if(this.user.ciudad != "VALLEDUPAR"){
      this.formapago = this.formapago.filter((fp) =>{
        return fp.numero != '0';
      });
    }
    console.log(this.formapago);
  }

  asignarProductos(){
    this.products = JSON.parse(JSON.stringify(this.productsGrl));
    console.log(this.products);
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
    let verificarDescuentoProd = false;
    this.products.forEach((p)=>{
      if(p.producto.descuento != '0'){
        verificarDescuentoProd = true;
      }
    })
    const index = this.obsequios.findIndex((data)=> {
      return this.total >= data.desde && this.total <= data.hasta;
    });
    for (let i = 0; i <= index; i++) {
      this.obsequiosShow.push(this.obsequios[i]);
      if(this.discount > 0 && this.obsequios[i].domicilio == "true"){
        this.obsequiosShow = this.obsequiosShow.filter(d => d != this.obsequios[i]);
      } 
      if(verificarDescuentoProd && this.obsequios[i].domicilio == "true"){ //Si encuentra al menos un producto con descuento 
        this.obsequiosShow = this.obsequiosShow.filter(d => d != this.obsequios[i]);
      } 
      if(this.discount > 0 && this.obsequios[i].descuento == "true"){
        this.obsequiosShow = this.obsequiosShow.filter(d => d != this.obsequios[i]);
      } 

      
      console.log(this.obsequiosShow);
    }
  }

  domicilio(){
    this.verificarDomicilio = this.obsequiosShow.filter((o) => {
      return o.domicilio == "true";
    });

    this.verificarDesceunto = this.obsequiosShow.filter((o) => {
      return o.descuento == "true";
    });
    
    if(this.verificarDomicilio.length > 0 && this.mismaCiudad()){
      return 0;
    }
    return this.calcularDomicilio();
  }

  calcularDomicilio(){
    if(this.mismaCiudad()){
      var valorRetorno = 0;
      let distancia = this.distanceService.difereciaEntreDosPuntos(this.store.lon, this.store.lat, this.gps.lon, this.gps.lat);
      //let distancia = this.distanceService.difereciaEntreDosPuntos(-73.2857307, 10.494702, -73.2295297, 10.444309);
      let distanciaMetros =  parseFloat(distancia)*1000;    
      this.domicilios.forEach((dom: any) =>  {
        if(distanciaMetros >= dom.desde && distanciaMetros <= dom.hasta){
          valorRetorno = dom.domicilio;
        }
      });
      // console.log(valorRetorno);
      return valorRetorno;
    } else {
      return 0;
    }
      
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
        this.verficarData();
      }
    });
  }

  finalizarPedido(){
    const prodPedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
    prodPedido.forEach(prod => {
      this.verificarCantidades(prod);  
    });
    if(this.fPago){
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
          if(this.fPago !== 'Pago Contra Entrega'){
              this.showFormaPago = true;
          } 
        }
      });
    }
    else{
      Swal.fire('', 'Debes seleccionar un medio de pago', 'error');
    }
  }
  
  async verificarCantidades(prod){
    const producto = await this.firebase.obtenerIdPromise('productos', prod.producto.id);
    this.productsGrl.forEach((p) => {
      if(p.producto.id == producto[0].id){
        p.producto.cantidad = producto[0].cantidad;
      }
    });
    this.verificarCanidadCero();
  }

  verificarCanidadCero(){
    this.sinCantidades = [];
    this.sinCantidad = '';
    this.sinCantidades = this.productsGrl.filter((p) => {
      return p.producto.cantidad == 0;
    });
    this.sinCantidades.forEach(p => {
      this.sinCantidad += ' '+p.producto.nombre+',';
    });
    this.productsGrl = this.productsGrl.filter((p) => {
      return p.producto.cantidad != 0;
    });
    if(this.sinCantidades.length > 0){
      Swal.fire('', 'Los productos"'+this.sinCantidad.toUpperCase()+'" se encuentran sin existencias y fueron removidos del carrito de compras', 'info');
    }
    this.asignarProductos();
    this.domicilio();
    this.cartService.administrarProducto(this.productsGrl);
    this.obtenerObssequios();
    this.verficarData();
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
    
    // console.log(this.products);


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
      estado: 1,
      idunico: this.idunico.uniqueId(),
      obsequios: this.obsequiosShow,
      formapago: this.fPago
    };
    this.firebase.guardarDatos('pedidos', pedido).then(()=> {
      this.oneSignal.sendDirectMessage('Hola, tienes un nuevo pedido por atender.')
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

  cargandoDomicilio(){
    return 'Calculando Valor de Domicilio...';
  }

  async actualizarInventario(){
    var fecha = this.distanceService.fechaActual();
    var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
    this.products.forEach(async (product) => {
      var prod = await this.firebase.obtenerUniqueIdPromise("productos", product.producto.idunico);
      console.log(product.producto.cantidad);
      prod[0].cantidad =  prod[0].cantidad - product.cantidad;
      console.log(prod[0]);
      await this.firebase.actualizarDatos("productos", prod[0], prod[0].id);
      await this.firebase.guardarDatos("movimientos", {producto: prod[0], movimiento:"SALIDA", fecha: fecha, usuario: usuario, cantidad: product.cantidad})
    });
  }

  mismaCiudad(){
    var verifica = this.user.ciudad == this.store.ciudad;
    return verifica;
  }
}
