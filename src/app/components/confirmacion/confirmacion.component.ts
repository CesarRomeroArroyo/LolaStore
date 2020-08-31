import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss'],
})
export class ConfirmacionComponent implements OnInit {
  @Input() formaspago: any[];
  @Output() showModal = new EventEmitter<boolean>();
  soporte: string;
  constructor(
    private firebase: FirebaseService
  ) {
    this.soporte = "";
  }

  ngOnInit() {
    this.firebase.obtener("usuarios").subscribe((user)=>{
      this.soporte = `https://api.whatsapp.com/send?phone=+57${user[0].contacto}`;

    });
  }

  show() {
    console.log(this.formaspago);
		this.showModal.emit(false);
	}


}
