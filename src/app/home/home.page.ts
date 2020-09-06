import { UsuarioInterface } from './../models/usuario.interface';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { StateApp } from '../services/state.service';
import * as moment from 'moment';
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	
	public categorias: any;
	public store: any;
	public iter = 1;
	public user: UsuarioInterface;
	public promociones;
	public facebook = '';
	public twitter = '';
	public instagram = '';
	public slideOpts = {
		initialSlide: 0,
		speed: 400
	};
	public MejoresDescuentos: any[] = [];
	public loading: boolean = false;
	public soporte: string;
	public fechas: any;
	public movmientoData: any[] = [];
	constructor(
		private firebase: FirebaseService,
		private router: Router,
		private state: StateApp
	) { }

	ngOnInit() {
		this.init();
	}

	async init() {
		this.loading = false;
		let user = JSON.parse(localStorage.getItem('APP_USER'));
		if (user) {
			this.user = user;
		}
		this.store = await this.firebase.obtenerPromise("usuarios");
		this.soporte = `https://api.whatsapp.com/send?phone=+57${this.store[0].contacto}`;
		this.categorias = await this.firebase.obtenerPromise("categorias");
		let transversal = await this.firebase.obtenerPromise('transversal');
		this.obtenerFechas();
		this.getMejoresDescuentos();
		this.promociones = transversal[0].promociones;
		console.log(this.promociones);
		this.loading = true;
		this.facebook = transversal[0].facebook;
		this.twitter = transversal[0].twitter;
		this.instagram = transversal[0].instagram;
		console.log(transversal);
	}


	async obtenerFechas(){
		var movimientos = await this.firebase.obtenerPromise("movimientos");
		this.fechas = movimientos.map((ped)=>{
			return ped.fecha;
		});
		this.fechas = [...new Set(this.fechas)];
		this.fechas = this.fechas.map(date => moment(date, "DD/MM/YYYY"));
		this.fechas.sort(function (left, right) {
			return right-left;
		});
		console.log(this.fechas[0]);
		console.log(this.fechas[1]);
		console.log(this.fechas[2]);

		this.fechas.forEach(async fec => {
			var productos = await this.firebase.obtenerXFechaPromise("movimientos", fec.format("DD/MM/YYYY") .toString());
			this.movmientoData = this.movmientoData.concat(productos);
			console.log(this.movmientoData);
		});
		
	}

	async getMejoresDescuentos() {
		let productos = await this.firebase.obtenerPromise('productos');
		productos.sort(function (prev, next) {
			if (prev.descuento < next.descuento) {
				return 1;
			}
			if (prev.descuento > next.descuento) {
				return -1
			}
			return 0;
		});
		productos.slice(0, 20);
		this.MejoresDescuentos = productos;
	}

	obtenerColor(index) {
		if (index % 2 == 0) {
			return 2;
		} else {
			if (index % 3 == 0) {
				return 3;
			}
			return 1;
		}
	}

	irDetalle(cat) {
		this.state.setData({ idcategoria: cat.idunico });
		this.router.navigate(['category']);
	}

}
