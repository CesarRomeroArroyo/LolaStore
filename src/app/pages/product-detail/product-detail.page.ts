import { ProductoInterface } from './../../models/producto.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { FirebaseService } from '@services/firebase.service';
import { StateApp } from '@services/state.service';
import { CartService } from '@services/cart.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.page.html',
	styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
	pedido: any[];
	producto: ProductoInterface;
	cantidad: number = 1;
	colorSelected: string = "";

	slideOpts = {
		initialSlide: 0,
		speed: 400
	};

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private firebaseSvc: FirebaseService,
		private state: StateApp,
		public toastController: ToastController,
		private cartService: CartService) { 
			this.pedido = [];
		}

	ngOnInit() {
		this.init();
	}

	ionViewWillEnter(){
		const pedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
		if(pedido){
			this.pedido = pedido;
		} else {
			this.pedido = [];
		}

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
		this.router.navigate(["category"]);
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
			}
		}
		return true;
	}

	adicionar() {
		if (this.cantidad >= this.producto.cantidad) {
			this.presentToast("La cantidad solicitada supera la cantidad en el inventario");
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
			this.pedido.push({producto: this.producto, cantidad: this.cantidad, color: this.colorSelected });
			this.cartService.administrarProducto(this.pedido);
			this.presentToast("Producto Agregado");
		} else {
			this.presentToast("Por favor elija un color");
		}
	}
}
