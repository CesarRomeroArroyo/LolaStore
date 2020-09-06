import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoInterface } from '@interfaces/producto.interface';

@Component({
	selector: 'app-tarjetas',
	templateUrl: './tarjetas.component.html',
	styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {

	@Input() public array: Array<ProductoInterface> = [];
	@Input() public wrap: boolean = true;

	constructor(private router: Router) { }

	ngOnInit() {
		setTimeout(() => {
			console.log(this.array);
		}, 1000);
	}

	calculoDescuento(producto: ProductoInterface): number {
		let descuento = producto.precio * (producto.descuento / 1000);
		let resultado = producto.precio - descuento
		return resultado;
	}

	goToDetail(producto) {
		this.router.navigate(['/product-detail', producto.idunico]);
	}

}
