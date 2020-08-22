import { ProductoInterface } from './../../models/producto.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { FirebaseService } from '@services/firebase.service';
import { StateApp } from '@services/state.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.page.html',
	styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

	producto: ProductoInterface;
	cantidad: number = 1;
	colorSelected: string = "";

	slideOpts = {
		initialSlide: 0,
		speed: 400
	};

	constructor(
		private route: ActivatedRoute,
		private firebaseSvc: FirebaseService,
		private state: StateApp,
		public toastController: ToastController) { }

	ngOnInit() {
		this.init();
	}

	async presentToast(message, color?) {
		const toast = await this.toastController.create({
			message: message,
			duration: 2000,
			color: color,
		});
		toast.present();
	}

	back() {
		window.history.back();
	}

	init() {
		this.route.paramMap.subscribe((params: any) => {
			let id = params.get('id');
			this.firebaseSvc.obtenerUniqueId("productos", id).subscribe((prod: any) => {
				this.producto = prod[0];
				console.log(this.producto);
			})
		})
	}

	validation() {
		if (this.producto.colores) {
			if (this.colorSelected == '') {
				return false;
			} else {
				return true;
			}
		}
	}

	adicionar() {
		if (this.cantidad >= this.producto.cantidad) {
		} else {
			this.cantidad++
		}
	}

	restar() {
		if (this.cantidad === 1) {
			this.cantidad = 1;
		} else {
			this.cantidad--;
		}
	}

	selectColor(color) {
		this.colorSelected = color;
	}

	addCar() {
		if (this.validation()) {
			this.state.setData({ producto: this.producto });
			this.state.setData({ cantidad: this.cantidad });
			this.state.setData({ color: this.colorSelected });
			// this.router.navigate(['/']);
		} else {
			this.presentToast("Por favor elija un color");
		}
	}
}
