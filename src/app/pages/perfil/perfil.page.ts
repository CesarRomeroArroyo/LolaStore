import { UniqueService } from './../../services/unique.service';
import { Component, OnInit } from '@angular/core';

import { FirebaseService } from 'src/app/services/firebase.service';
import { UsuarioInterface } from '@interfaces/usuario.interface';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.page.html',
	styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

	cities: string[] = [];
	usuario: UsuarioInterface = {
		nombre: '',
		ciudad: '',
		cedula: '',
		contacto: '',
		direccion: '',
		email: '',
	};

	constructor(
		private firebaseSvc: FirebaseService,
		private uniqueid: UniqueService) { }

	ngOnInit() {
		this.init();
	}

	init() {
		if(JSON.parse(localStorage.getItem("USER_LOLA"))) {
			this.usuario = JSON.parse(localStorage.getItem("USER_LOLA"));
			console.log(this.usuario);
		}
		this.getCities();
	}

	getCities() {
		this.firebaseSvc.obtener("ciudades").subscribe((resp: any) => {
			this.cities = resp[0].ciudades;
		});
	}

	validation() {
		if (this.usuario.nombre != "" && this.usuario.email != "" && this.usuario.cedula != "" && this.usuario.contacto != "" && this.usuario.ciudad != "" && this.usuario.direccion != "") {
			return true;
		} else {
			return false;
		}
	}

	save() {
		if (this.validation()) {
			this.usuario.idunico = this.uniqueid.uniqueId();
			this.usuario.estado = 1;
			this.firebaseSvc.guardarDatos("clientes", this.usuario).then(() => {
				localStorage.setItem("USER_LOLA", JSON.stringify(this.usuario));
				console.log("Datos almacenados correctamente");
			});
		} else {
			console.log("Verificar");
		}

	}
}
