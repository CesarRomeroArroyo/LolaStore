import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StateApp } from 'src/app/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  category: any;
  categorySel: any;
  productosCategoria: any = [];
  productos : any = [];
  productosSeleccionados : any = [];
  constructor(
    private firebase: FirebaseService,
    private state: StateApp,
    private router: Router
  ) { }

  ngOnInit() {
    this.categorySel = 'all';
    this.state.getObservable().subscribe((data)=>{
      this.firebase.obtenerUniqueId("categorias", data.idcategoria).subscribe((cat) => {
        this.category = cat[0];
        this.firebase.obtenerProductoCategoria(this.category.idunico).subscribe((prod)=>{
          this.productosCategoria = prod;
          this.ordenarProductosSubCategoria();
        });
      });
    });
    
  }

  ordenarProductosSubCategoria() {
    this.category.subcategorias.forEach(sub => {
      const producto = {nombre: sub.nombre, productos: []};
      producto.productos = this.productosCategoria.filter((prod) =>{
        return prod.idunicoSubcategoria == sub.idunico;
      });
      this.productos.push(producto);
      console.log(this.productos);
    });
    this.productosSeleccionados = this.productos;
  }

  selectCategory(cat){
    console.log(cat);
    this.categorySel = cat;
    if(cat == 'all'){
      this.productosSeleccionados = this.productos;
    } else {
      this.productosSeleccionados = [cat];
    }
  }

  irAtras(){
    this.router.navigate(['home']);
  }

}
