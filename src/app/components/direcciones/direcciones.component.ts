import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UsuarioInterface } from '@interfaces/usuario.interface';

@Component({
	selector: 'app-direcciones',
	templateUrl: './direcciones.component.html',
	styleUrls: ['./direcciones.component.scss'],
})
export class DireccionesComponent implements OnInit {

	@Input() usuario: UsuarioInterface;
	@Output() showModal = new EventEmitter<boolean>();
	@Output() direccionSelected = new EventEmitter<string>();
	public adress: string = "";

	constructor(private firebaseSvc: FirebaseService) { }

	ngOnInit() { }

	show() {
		this.showModal.emit(false);
	}

	selectAdress(adress: string) {
		this.direccionSelected.emit(adress);
		this.showModal.emit(false);
	}

	addAdress() {
		if (this.adress != "") {
			this.usuario.direcciones.unshift(this.adress);
			this.adress = "";
		}
	}

	deleteAdress(i: number) {
		this.usuario.direcciones.splice(i, 1);
	}
}
