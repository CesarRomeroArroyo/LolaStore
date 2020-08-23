import { CategoryPage } from './../category/category.page';
import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '@interfaces/producto.interface';
import { FirebaseService } from '@services/firebase.service';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.page.html',
	styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

	dataShow: any[] = [];
	data: any[] = [];
	productos: ProductoInterface[] = [];
	categorias: any[] = [];
	query: string = "";

	constructor(private firebaseSvc: FirebaseService) { }

	ngOnInit() {
		this.init();
	}

	async init() {
		this.productos = await this.firebaseSvc.obtenerPromise('productos');
		this.categorias = await this.firebaseSvc.obtenerPromise('categorias');
		this.categorias.forEach(element => {
			const data = { nombre: element.nombre, subcategorias: element.subcategorias };
			data.subcategorias.forEach(sub => {
				sub['productos'] = this.productos.filter(producto => producto.idunicoSubcategoria == sub.idunico);
			});
			this.data.push(data);
		});
	}

	definirSub(categoria) {
		let dataReturn: Array<any> = [];
		let subcategoria;
		categoria.subcategorias.forEach(sub => {
			subcategoria = {
				nombre: sub.nombre,
				productos: sub.productos.filter(prod => {
					return prod.nombre.toUpperCase().indexOf(this.query.toUpperCase()) >= 0;
				})
			}
			if (subcategoria.productos.length > 0) {
				dataReturn.push(subcategoria);
			}
		})
		return dataReturn;
	}

	buscar() {
		if (this.query == '') {
			this.dataShow = [];
		} else {
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
			console.log(data);
			data.forEach((cat, index) => {
				cat.subcategorias.forEach((sub, index) => {
					if (sub.productos.length > 0) {
						cat['tiene'] = true;
					}
				});
			});
			this.dataShow = data;
		}
	}
}
