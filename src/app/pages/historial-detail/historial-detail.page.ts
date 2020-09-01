import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseService } from '@services/firebase.service';
import { PedidoInterface } from '@models/pedido.interface';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-historial-detail',
	templateUrl: './historial-detail.page.html',
	styleUrls: ['./historial-detail.page.scss'],
})
export class HistorialDetailPage implements OnInit {

	public pedido: any;
	public usuario: any;
	public productos: any;
	public showModal: boolean = false;

	constructor(
		private firebase: FirebaseService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.init();
	}

	ionViewWillEnter() {
		this.init();
	}

	init() {
		this.route.paramMap.subscribe(async (param) => {
			let id = param.get('id');
			let data = await this.firebase.obtenerUniqueIdPromise('pedidos', id);
			this.pedido = data[0];
			this.usuario = this.pedido.usuario;
			this.productos = this.pedido.productos;
			console.log(this.pedido);
		});
	}
	closeModal(e) {
		this.showModal = e;
	}

	descuentoAplicado() {
		switch (this.pedido.descuento) {
			case "prod": {
				return "Producto";
			}
				break;
			case "store": {
				return "Tienda";
			}
				break;
			case "transv": {
				return "Transversal";
			}
				break;
			default:
				break;
		}
		return
	}

	calcularDescuento(prod) {
		if (prod.producto.descuento != 0) {
			return (prod.producto.precio - (prod.producto.precio * (prod.producto.descuento / 100))) * prod.cantidad;
		}
	}

	calificarPedido() {
		Swal.fire({
			title: '',
			text: '¿Ya recibiste tu pedido?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
		  }).then((result) => {
			if (result.value) {
			  this.showModal = true;
			}
		  });
	}
}
