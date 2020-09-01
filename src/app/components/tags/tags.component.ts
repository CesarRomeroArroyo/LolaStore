import { PedidoInterface } from '@models/pedido.interface';
import { UsuarioInterface } from './../../models/usuario.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '@services/firebase.service';
import { StateApp } from '@services/state.service';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {

	public numProd: number;
	public user: UsuarioInterface;
	public pedidos: PedidoInterface[];
	public pendientes: number = null;

	constructor(
		private router: Router,
		private state: StateApp,
		private firebaseSvc: FirebaseService
	) { 
		this.numProd = 0;
	}

	ngOnInit() {
		this.state.getObservable().subscribe((data) =>{
			if(data.pedido){
				this.numProd = data.pedido.length;
			}
		});

		this.firebaseSvc.obtener('pedidos').subscribe((pedidos) => {
			const PEDIDOS = pedidos;
			this.user = JSON.parse(localStorage.getItem("APP_USER"));
			this.pedidos = PEDIDOS.filter(element => {
				return element.usuario.idunico === this.user.idunico;
			});
			let data = this.pedidos.filter(element => element.estado === 1);
			this.pendientes = data.length;
		});

		const pedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
		if(pedido){
			this.numProd = pedido.length;
		} else {
			this.numProd = 0;
		}
	}

}
