import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss'],
})
export class DescuentosComponent implements OnInit {
  @Input() discountProd: boolean;
  decuentoAplicado: string = '';
  discount: number = 0;
  constructor(
    private firebase: FirebaseService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    //this.discountProd = false;
    this.decuentoAplicado = "prod";
    this.discount = 0;
    this.firebase.obtener("transversal").subscribe((t) => {
      if(t[0].descuento>0){
        this.discount = t[0].descuento;
      }
    });
  }

  seleccionarDescuento(desc){
    this.decuentoAplicado=desc;
    if(desc=="store"){
      //this.aplicarDesctuentoTienda();
    } else {
      //this.asignarProductos();
    }
  }

}
