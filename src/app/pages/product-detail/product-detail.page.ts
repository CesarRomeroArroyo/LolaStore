import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseService } from '@services/firebase.service';
import { StateApp } from '@services/state.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.page.html',
	styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

	producto: any;
	cantidad: number = 1;

	constructor(
		private route: ActivatedRoute,
		private firebaseSvc: FirebaseService,
		private router: Router,
		private state: StateApp) { }

	ngOnInit() {
		this.init();
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

	adicionar() {
		if(this.cantidad >= this.producto.cantidad) {
		} else {
			this.cantidad++
		}
	}

	restar() {
		if(this.cantidad === 1) {
			this.cantidad = 1;
		} else {
			this.cantidad--;
		}
	}

	addCar() {
		this.state.setData({producto: this.producto});
		this.state.setData({cantidad: this.cantidad});
		// this.router.navigate(['/']);
	}
}
