import { CategoryPage } from './../category/category.page';
import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '@interfaces/producto.interface';
import { FirebaseService } from '@services/firebase.service';

@Component({
	selector: 'app-favoritos',
	templateUrl: './favoritos.page.html',
	styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
	dataShow: any[] = [];
	data: any[] = [];
	productos: ProductoInterface[] = [];
	categorias: any[] = [];
	query: string = "";
	user: any;
	constructor(private firebaseSvc: FirebaseService) { }

	ngOnInit() {
	}

	async ionViewWillEnter() {
		var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
		if(usuario){
			this.firebaseSvc.obtenerUniqueId("clientes", usuario.idunico).subscribe((user) => {
				this.user = {};
				this.user = user[0];
				this.init();
			});
		}	
	}

	async init() {
		this.data = [];
		this.dataShow = [];
		this.productos = [];
		if(this.user['favoritos']){
			this.productos = this.user.favoritos;
		}
		this.categorias = await this.firebaseSvc.obtenerPromise('categorias');
		this.categorias.forEach(element => {
			const data = { nombre: element.nombre, subcategorias: element.subcategorias };
			data.subcategorias.forEach(sub => {
				sub['productos'] = this.productos.filter(producto => producto.idunicoSubcategoria == sub.idunico);
			});
			this.data.push(data);
		});
		this.buscar();
	}

	definirSub(categoria) {
		let dataReturn: Array<any> = [];
		this.data = [];
		let subcategoria = { nombre: '', productos: [] };
		categoria.subcategorias.forEach(sub => {
			subcategoria = {
				nombre: sub.nombre,
				productos: sub.productos
			}
			if (subcategoria.productos.length > 0) {
				dataReturn.push(subcategoria);
			}
		})
		return dataReturn;
	}

	buscar() {
		this.dataShow = [];
		let data: Array<any> = [];
		this.data.forEach(cat => {
			let subcategoria = this.definirSub(cat);
			this.definirSub(cat);
			data.push({
				nombre: cat.nombre,
				subcategorias: subcategoria
			});
		});
		data.forEach((cat, index) => {
			cat.subcategorias.forEach((sub, index) => {
				if (sub.productos.length > 0) {
					cat['tiene'] = true;
				}
			});
		});
		console.log(data);
		this.dataShow = data;
	}

}
