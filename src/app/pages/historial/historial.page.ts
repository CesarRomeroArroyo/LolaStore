import { UsuarioInterface } from '@interfaces/usuario.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '@services/firebase.service';
import { PedidoInterface } from '@models/pedido.interface';

@Component({
	selector: 'app-historial',
	templateUrl: './historial.page.html',
	styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

	public pedidos: PedidoInterface[] = [];
	public user: UsuarioInterface;

	constructor(
		private firebaseSvc: FirebaseService,
		private router: Router
		) { }

	ngOnInit() {
		this.init();
	}

	init() {
		this.firebaseSvc.obtener('pedidos').subscribe(data => {
			const PEDIDOS = data;
			this.user = JSON.parse(localStorage.getItem("APP_USER"));
			this.pedidos = PEDIDOS.filter(element => {
				return element.usuario.idunico === this.user.idunico;
			});
		});
	}

	redirectTo(pedido: PedidoInterface) {
		this.router.navigate(["/historial-detail", pedido['idunico']]);
	}

}
