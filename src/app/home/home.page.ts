import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { StateApp } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  categorias: any;
  iter= 1;
  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private state: StateApp
  ) {}

  ngOnInit() {
    this.firebase.obtener("categorias").subscribe((data) => {
      this.categorias = data;
    });
  }

  obtenerColor(index){
    console.log(index);
    if(index%2==0){
      return 2;
    } else {
      if(index%3==0){
        return 3;
      }
      return 1;
    }
  }

  irDetalle(cat){
    this.state.setData({idcategoria: cat.idunico});
    this.router.navigate(['category']);
  }

}
