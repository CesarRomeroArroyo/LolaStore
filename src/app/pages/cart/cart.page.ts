import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products = [
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
        precio: 15000,
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
        precio: 5000,
        url: "https://firebasestorage.googleapis.com/v0/b/lolastore-b2e58.appspot.com/o/productos%2F32ed2acf-38c8-4aa2-b2d2-70d7fef72d33%2F1988093375160_.jpg?alt=media&token=39dc2a54-3900-4ec9-9470-a5f57cfe4c91"
      }
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irAtras(){
    this.router.navigate(["home"]);
  }

  calcularDescuento(prod){
    if(prod.descuento != 0){
      return prod.precio-(prod.precio * (prod.descuento/100));
    }
  }
  

}
