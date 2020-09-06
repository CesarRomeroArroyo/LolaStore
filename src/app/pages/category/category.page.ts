import { finalize } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { StateApp } from 'src/app/services/state.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-category',
	templateUrl: './category.page.html',
	styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
	buscarText: string;
	category: any;
	categorySel: any;
	productosCategoria: any = [];
	productos: any = [];
	productosSeleccionados: any = [];
	search: boolean = false;
	dataShow: any[] = [];

	constructor(
		private firebase: FirebaseService,
		private state: StateApp,
		private router: Router
	) {
		this.buscarText = "";
	}

	ngOnInit() {
		this.categorySel = 'all';
		this.state.getObservable().subscribe((data) => {
			this.firebase.obtenerUniqueId("categorias", data.idcategoria).subscribe((cat) => {
				this.category = cat[0];
				this.firebase.obtenerProductoCategoria(this.category.idunico).subscribe((prod) => {
					prod.forEach(element => {
						if (!element['foto']) {
							element.foto = "";
							element.url = "";
						}
					});
					console.log(prod);
					this.productosCategoria = prod;
					this.ordenarProductosSubCategoria();
				});
			});
		});
	}

	ordenarProductosSubCategoria() {
		this.category.subcategorias.forEach(sub => {
			const producto = { nombre: sub.nombre, productos: [] };
			producto.productos = this.productosCategoria.filter((prod) => {
				return prod.idunicoSubcategoria == sub.idunico;
			});
			this.productos.push(producto);
			console.log(this.productos);
		});
		this.productosSeleccionados = this.productos;
		this.dataShow = this.productos;
	}

	selectCategory(cat) {
		console.log(cat);
		this.categorySel = cat;
		if (cat == 'all') {
			this.productosSeleccionados = this.productos;
			this.dataShow = this.productosSeleccionados;
		} else {
			this.productosSeleccionados = [cat];
			this.dataShow = this.productosSeleccionados;
		}
	}

	irAtras() {
		this.router.navigate(['home']);
	}

	buscar() {
		if (this.buscarText == '') {
			this.dataShow = this.productosSeleccionados;
			console.log(this.dataShow);
			return;
		} else {
			let data: any[] = [];
			this.buscarText = this.buscarText.toUpperCase();
			this.productosSeleccionados.forEach(element => {
				data.push({
					nombre: element.nombre,
					productos: element.productos.filter(prod => {
						return prod.nombre.toUpperCase().indexOf(this.buscarText.toUpperCase()) >= 0;
					})
				})
			});
			this.dataShow = data;
		}
	}

	goToDetail(producto) {
		this.router.navigate(['/product-detail', producto.idunico]);
	}
}
