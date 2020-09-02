import { UniqueService } from './../../services/unique.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { FirebaseService } from 'src/app/services/firebase.service';
import { UsuarioInterface } from '@interfaces/usuario.interface';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.page.html',
	styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

	public cities: string[] = [];
	public usuario: UsuarioInterface = {
		nombre: '',
		ciudad: '',
		cedula: '',
		contacto: '',
		direccion: '',
		direcciones: [],
		email: '',
	};
	public showModal: boolean = false;
	public pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

	constructor(
		private firebaseSvc: FirebaseService,
		private uniqueid: UniqueService,
		public toastController: ToastController) { }

	ngOnInit() {
		this.init();
	}

	ionViewWillEnter() {
		this.init();
	}

	init() {
		this.getCities();
	}

	getCities() {
		this.firebaseSvc.obtener("ciudades").subscribe((resp: any) => {
			this.cities = resp[0].ciudades;
			if (JSON.parse(localStorage.getItem("APP_USER"))) {
				this.usuario = JSON.parse(localStorage.getItem("APP_USER"));
			}
		});
	}

	selecAdress(e) {
		this.usuario.direccion = e;
	}

	closeModal(e) {
		this.showModal = e;
	}

	async presentToast(message, color?) {
		const toast = await this.toastController.create({
			message: message,
			duration: 2000,
			color: color,
		});
		toast.present();
	}

	validation() {
		if (this.usuario.nombre != "" && this.usuario.email != "" && this.usuario.cedula != "" && this.usuario.contacto != "" && this.usuario.ciudad != "" && this.usuario.direccion != "") {
			return true;
		} else {
			return false;
		}
	}

	async checkOutUser() {
		let usuarios = await this.firebaseSvc.obtenerPromise('clientes');
		usuarios.forEach(element => {
			if (element.cedula === this.usuario.cedula && element.email === this.usuario.email) {
				this.usuario = element;
				localStorage.setItem("APP_USER", JSON.stringify(this.usuario));
			}
		})
	}

	save() {
		console.log(this.usuario);
		if (this.validation()) {
			this.usuario.idunico = this.uniqueid.uniqueId();
			this.usuario.estado = 1;
			this.firebaseSvc.guardarDatos("clientes", this.usuario).then((resp) => {
				this.usuario.id = resp.toString();
				localStorage.setItem("APP_USER", JSON.stringify(this.usuario));
				this.presentToast("Datos almacenados correctamente");
			});
		} else {
			this.presentToast("¡Por favor verifique los campos!");
		}
	}

	updateData() {
		if (this.validation()) {
			this.firebaseSvc.actualizarDatos("clientes", this.usuario, this.usuario.id).then((resp) => {
				localStorage.setItem("APP_USER", JSON.stringify(this.usuario));
				this.presentToast("Datos actualizados correctamente")
			});
		} else {
			this.presentToast("¡Por favor verifique los campos!");
		}
	}
}
