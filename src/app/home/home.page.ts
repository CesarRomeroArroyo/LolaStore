import { ProductoInterface } from './../models/producto.interface';
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
	public catalogo: string;
	public mostrarCatalogo: boolean = true;
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
	public loading = false;
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
		const user = JSON.parse(localStorage.getItem('APP_USER'));
		if (user) {
			this.user = user;
		}
		this.store = await this.firebase.obtenerPromise('usuarios');
		this.soporte = `https://api.whatsapp.com/send?phone=+57${this.store[0].contacto}`;
		this.categorias = await this.firebase.obtenerPromise('categorias');
		const transversal = await this.firebase.obtenerPromise('transversal');
		this.obtenerFechas();
		this.getMejoresDescuentos();
		this.promociones = transversal[0].promociones;
		this.loading = true;
		this.facebook = transversal[0].facebook;
		this.twitter = transversal[0].twitter;
		this.instagram = transversal[0].instagram;
		this.mostrarCatalogo = transversal[0].mostrarCatalogo;
		this.catalogo = transversal[0].catalogo;
	}


	async obtenerFechas() {
		const movimientos = await this.firebase.obtenerPromise('movimientos');
		this.fechas = movimientos.map((ped) => {
			return ped.fecha;
		});
		this.fechas = [...new Set(this.fechas)];
		this.fechas = this.fechas.map(date => moment(date, 'DD/MM/YYYY'));
		this.fechas.sort((left, right) => {
			return right - left;
		});

		this.fechas.forEach(async fec => {
			const productos = await this.firebase.obtenerXFechaPromise('movimientos', fec.format('DD/MM/YYYY').toString());
			this.movmientoData = this.movmientoData.concat(productos);
		});

	}

	async getMejoresDescuentos() {
		const productos: ProductoInterface[] = await this.firebase.obtenerPromise('productos');
		productos.sort((prev, next) => {
			if (prev.descuento < next.descuento) {
				return 1;
			}
			if (prev.descuento > next.descuento) {
				return -1
			}
			return 0;
		});
		const data = [];
		productos.forEach(element => {
			if (!element.foto) {
				element.foto = '';
				element.url = '';
			}
			if (element.descuento > 0) {
				data.push(element);
			}
		})
		this.MejoresDescuentos = data.slice(0, 10);
	}

	obtenerColor(index) {
		if (index % 2 === 0) {
			return 2;
		} else {
			if (index % 3 === 0) {
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
