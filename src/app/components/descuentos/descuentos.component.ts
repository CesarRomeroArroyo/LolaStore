import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss'],
})
export class DescuentosComponent implements OnInit {
  @Input() discountProd: boolean;
  @Input() decuentoAplicado: string;
  @Input() total: number;
  @Output() descuentoSelected = new EventEmitter<string>();
  @Output() showModal = new EventEmitter<boolean>();
  obsequios: any;
  obsequiosShow: any[];
  discount: number = 0;
  verificarDesceunto: any;
  constructor(
    private firebase: FirebaseService
  ) { 
    this.verificarDesceunto = [];
  }

  ngOnInit() {
    this.discount = 0;
    this.firebase.obtener("transversal").subscribe((t) => {
      if(t[0].descuento>0){
        this.discount = t[0].descuento;
        console.log(this.discount);
      }
      if(t[0].obsequios){
        this.obsequios = t[0].obsequios;
        this.obtenerObssequios();
      }
    });
  }

  obtenerObssequios(){
    this.obsequiosShow = [];
    const index = this.obsequios.findIndex((data)=> {
      return this.total >= data.desde && this.total <= data.hasta && data.hasta != 999999999;
    });
    console.log(index);
    for (let i = 0; i <= index; i++) {
      this.obsequiosShow.push(this.obsequios[i]);
    }
    console.log(this.obsequiosShow);
    this.verificarDesceunto = this.obsequiosShow.filter((o) => {
      return o.descuento == true;
    });
  }

  show() {
		this.showModal.emit(false);
	}

  seleccionarDescuento(desc){
    this.decuentoAplicado=desc;
    this.descuentoSelected.emit(desc);
  }

}
