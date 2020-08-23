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
  @Output() descuentoSelected = new EventEmitter<string>();
  @Output() showModal = new EventEmitter<boolean>();

  discount: number = 0;
  constructor(
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    this.discount = 0;
    this.firebase.obtener("transversal").subscribe((t) => {
      if(t[0].descuento>0){
        this.discount = t[0].descuento;
        console.log(this.discount);
      }
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
