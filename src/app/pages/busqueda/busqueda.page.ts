import { CategoryPage } from './../category/category.page';
import { Component, OnInit } from '@angular/core';

import { ProductoInterface } from '@interfaces/producto.interface';
import { FirebaseService } from '@services/firebase.service';
import { IfStmt } from '@angular/compiler';

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
		var arrayQuery = this.query.split(' ');
		let dataReturn: Array<any> = [];
		let subcategoria;
		categoria.subcategorias.forEach(sub => {
			if(arrayQuery.length == 1){
				subcategoria = {
					nombre: sub.nombre,
					productos: sub.productos.filter(prod => {
						return prod.nombre.toUpperCase().indexOf(arrayQuery[0].toUpperCase()) >= 0;
					})
				}
				if (subcategoria.productos.length > 0) {
					dataReturn.push(subcategoria);
				}
			}
			if(arrayQuery.length == 2){
				subcategoria = {
					nombre: sub.nombre,
					productos: sub.productos.filter(prod => {
						return prod.nombre.toUpperCase().indexOf(arrayQuery[0].toUpperCase()) >= 0;
					})
				}
				subcategoria.productos = subcategoria.productos.filter(prod => {
					return prod.nombre.toUpperCase().indexOf(arrayQuery[1].toUpperCase()) >= 0;
				})
				if (subcategoria.productos.length > 0) {
					dataReturn.push(subcategoria);
				}
			}
			if(arrayQuery.length >= 3){
				subcategoria = {
					nombre: sub.nombre,
					productos: sub.productos.filter(prod => {
						return prod.nombre.toUpperCase().indexOf(arrayQuery[0].toUpperCase()) >= 0;
					})
				}
				subcategoria.productos = subcategoria.productos.filter(prod => {
					return prod.nombre.toUpperCase().indexOf(arrayQuery[1].toUpperCase()) >= 0;
				})
				subcategoria.productos = subcategoria.productos.filter(prod => {
					return prod.nombre.toUpperCase().indexOf(arrayQuery[2].toUpperCase()) >= 0;
				})
				if (subcategoria.productos.length > 0) {
					dataReturn.push(subcategoria);
				}
			}
		})
		return dataReturn;
	}

	definirSubSubtitle(categoria) {
		var arrayQuery = this.query.split(' ');
		let dataReturn: Array<any> = [];
		let subcategoria;
		categoria.subcategorias.forEach(sub => {
			if(arrayQuery.length == 1){
				subcategoria = {
					nombre: sub.nombre,
					productos: sub.productos.filter(prod => {
						if(prod.subtitulo){
							return prod.subtitulo.toUpperCase().indexOf(arrayQuery[0].toUpperCase()) >= 0 || null;
						}
					})
				}
				if (subcategoria.productos.length > 0) {
					dataReturn.push(subcategoria);
				}
			}
			if(arrayQuery.length == 2){
				subcategoria = {
					nombre: sub.nombre,
					productos: sub.productos.filter(prod => {
						if(prod.subtitulo){
							return prod.subtitulo.toUpperCase().indexOf(arrayQuery[0].toUpperCase()) >= 0 || null;
						}
					})
				}
				subcategoria.productos = subcategoria.productos.filter(prod => {
					if(prod.subtitulo){
						return prod.subtitulo.toUpperCase().indexOf(arrayQuery[1].toUpperCase()) >= 0 || null;
					}
				})
				if (subcategoria.productos.length > 0) {
					dataReturn.push(subcategoria);
				}
			}
			if(arrayQuery.length >= 3){
				subcategoria = {
					nombre: sub.nombre,
					productos: sub.productos.filter(prod => {
						if(prod.subtitulo){
							return prod.subtitulo.toUpperCase().indexOf(arrayQuery[0].toUpperCase()) >= 0 || null;
						}
					})
				}
				subcategoria.productos = subcategoria.productos.filter(prod => {
					if(prod.subtitulo){
						return prod.subtitulo.toUpperCase().indexOf(arrayQuery[1].toUpperCase()) >= 0 || null;
					}
				})
				subcategoria.productos = subcategoria.productos.filter(prod => {
					if(prod.subtitulo){
						return prod.subtitulo.toUpperCase().indexOf(arrayQuery[2].toUpperCase()) >= 0 || null;
					}
				})
				if (subcategoria.productos.length > 0) {
					dataReturn.push(subcategoria);
				}
			}
		})
		return dataReturn;
	}

	buscar() {
		if (this.query == '' || this.query.length <= 2) {
			this.dataShow = [];
		} else {
			this.dataShow = [];
			var data: Array<any> = [];
			this.data.forEach(cat => {
				let subcategoria = this.definirSub(cat);
				data.push({
					nombre: cat.nombre,
					subcategorias: subcategoria
				});
			});
			this.data.forEach(cat => {
				let subcategoria = this.definirSubSubtitle(cat);
				data.push({
					nombre: cat.nombre,
					subcategorias: subcategoria
				});
			});
			this.dataShow = data;
		}
	}
}
