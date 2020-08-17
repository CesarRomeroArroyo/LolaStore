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
    this.productsGrl = [
      {
        cantidad: 4,
        producto:{
          descripcion: "descendant",
          descuento: 0,
          estado: "1",
          foto: "productos/8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7/favicon.png",
          id: "H2Yet1lPZwFgXsDubmdd",
          idunico: "8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7",
          idunicoCategoria: "54c1ad43-e223-4c5f-aee0-9f302694bae1",
          idunicoSubcategoria: "e26b1734-da09-44c0-82c1-48d93e8f71d6",
          nombre: "Producto descuento VOGUE",
          nombreCategoria: "LABIOS",
          nombreSubcategoria: "GLOSS (BRILLO)",
          precio: 1000,
          url: "https://firebasestorage.googleapis.com/v0/b/lolastore-b2e58.appspot.com/o/productos%2F32ed2acf-38c8-4aa2-b2d2-70d7fef72d33%2F1988093375160_.jpg?alt=media&token=39dc2a54-3900-4ec9-9470-a5f57cfe4c91"
        }
      },
      {
        cantidad: 2,
        producto:{
          descripcion: "descendant",
          descuento: 10,
          estado: "1",
          foto: "productos/8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7/favicon.png",
          id: "H2Yet1lPZwFgXsDubmdd",
          idunico: "8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7",
          idunicoCategoria: "54c1ad43-e223-4c5f-aee0-9f302694bae1",
          idunicoSubcategoria: "e26b1734-da09-44c0-82c1-48d93e8f71d6",
          nombre: "Producto descuento VOGUE",
          nombreCategoria: "LABIOS",
          nombreSubcategoria: "GLOSS (BRILLO)",
          precio: 1000,
          url: "https://firebasestorage.googleapis.com/v0/b/lolastore-b2e58.appspot.com/o/productos%2F32ed2acf-38c8-4aa2-b2d2-70d7fef72d33%2F1988093375160_.jpg?alt=media&token=39dc2a54-3900-4ec9-9470-a5f57cfe4c91"
        }
      },
      {
        cantidad: 4,
        producto:{
          descripcion: "descendant",
          descuento: 0,
          estado: "1",
          foto: "productos/8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7/favicon.png",
          id: "H2Yet1lPZwFgXsDubmdd",
          idunico: "8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7",
          idunicoCategoria: "54c1ad43-e223-4c5f-aee0-9f302694bae1",
          idunicoSubcategoria: "e26b1734-da09-44c0-82c1-48d93e8f71d6",
          nombre: " polvo suelto translucido de RAQUEL ",
          nombreCategoria: "LABIOS",
          nombreSubcategoria: "GLOSS (BRILLO)",
          precio: 1000,
          url: "https://firebasestorage.googleapis.com/v0/b/lolastore-b2e58.appspot.com/o/productos%2F32ed2acf-38c8-4aa2-b2d2-70d7fef72d33%2F1988093375160_.jpg?alt=media&token=39dc2a54-3900-4ec9-9470-a5f57cfe4c91"
        }
      },
      {
        cantidad: 4,
        producto:{
          descripcion: "descendant",
          descuento: 0,
          estado: "1",
          foto: "productos/8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7/favicon.png",
          id: "H2Yet1lPZwFgXsDubmdd",
          idunico: "8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7",
          idunicoCategoria: "54c1ad43-e223-4c5f-aee0-9f302694bae1",
          idunicoSubcategoria: "e26b1734-da09-44c0-82c1-48d93e8f71d6",
          nombre: "Producto descuento VOGUE",
          nombreCategoria: "LABIOS",
          nombreSubcategoria: "GLOSS (BRILLO)",
          precio: 1000,
          url: "https://firebasestorage.googleapis.com/v0/b/lolastore-b2e58.appspot.com/o/productos%2F32ed2acf-38c8-4aa2-b2d2-70d7fef72d33%2F1988093375160_.jpg?alt=media&token=39dc2a54-3900-4ec9-9470-a5f57cfe4c91"
        }
      },
      {
        cantidad: 4,
        producto:{
          descripcion: "descendant",
          descuento: 0,
          estado: "1",
          foto: "productos/8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7/favicon.png",
          id: "H2Yet1lPZwFgXsDubmdd",
          idunico: "8e8eed48-600c-47e4-9fcf-2d15d8ef0cd7",
          idunicoCategoria: "54c1ad43-e223-4c5f-aee0-9f302694bae1",
          idunicoSubcategoria: "e26b1734-da09-44c0-82c1-48d93e8f71d6",
          nombre: "Producto descuento VOGUE",
          nombreCategoria: "LABIOS",
          nombreSubcategoria: "GLOSS (BRILLO)",
          precio: 2000,
          url: "https://firebasestorage.googleapis.com/v0/b/lolastore-b2e58.appspot.com/o/productos%2F32ed2acf-38c8-4aa2-b2d2-70d7fef72d33%2F1988093375160_.jpg?alt=media&token=39dc2a54-3900-4ec9-9470-a5f57cfe4c91"
        }
      }
    ];
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
