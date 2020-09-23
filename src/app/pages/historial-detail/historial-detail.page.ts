import { ProductoInterface } from './../../models/producto.interface';
import { UsuarioInterface } from './../../models/usuario.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseService } from '@services/firebase.service';
import { PedidoInterface } from '@models/pedido.interface';
import Swal from 'sweetalert2';
import { FileManagerService } from '@services/file-manager.service';

@Component({
	selector: 'app-historial-detail',
	templateUrl: './historial-detail.page.html',
	styleUrls: ['./historial-detail.page.scss'],
})
export class HistorialDetailPage implements OnInit {

	public pedido: PedidoInterface;
	public usuario: UsuarioInterface;
	public productos: ProductoInterface;
	public showModal: boolean = false;
	public mediopago: any;
	public star: number[] = [5, 4, 3, 2, 1];
	public stars: number = null;

	constructor(
		private firebase: FirebaseService,
		private route: ActivatedRoute,
		private fileManager: FileManagerService
	) { }

	ngOnInit() {
		this.init();
	}

	ionViewWillEnter() {
		this.init();
	}

	async init() {
		var trasnversal = await this.firebase.obtenerPromise("transversal");
		this.mediopago = trasnversal[0].opcionespago;
		this.route.paramMap.subscribe(async (param) => {
			let id = param.get('id');
			let data = await this.firebase.obtenerUniqueIdPromise('pedidos', id);
			this.pedido = data[0];
			this.usuario = this.pedido.usuario;
			this.productos = this.pedido.productos;
			this.stars = this.pedido.estrellas;
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

	async fileChangeEvent(e: any){
		var fileName = e[0];
		var fileType = fileName.type;
		await this.fileManager.upload2(fileName, 'pedidos/'+this.pedido.idunico+'/'+fileName.name);
		this.fileManager.uploadURL.subscribe((data) => {
			this.pedido.url = data;
			console.log(this.pedido.url);
			this.actualizarPedido();
		});
	}

	actualizarPedido(){
		this.firebase.actualizarDatos('pedidos', this.pedido, this.pedido.id).then(() =>{
			Swal.fire('', 'Se ha actualizado el pedido con la informacion del pago', 'success');
		}).catch(() =>{
			Swal.fire('', 'Ocurrio un error al momento de subir el comprobante de pago, ponte en contacto con la tienda', 'error');
		});
	}

	
}
