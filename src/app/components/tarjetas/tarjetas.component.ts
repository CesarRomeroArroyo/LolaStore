import { ProductoInterface } from '@interfaces/producto.interface';
import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
	selector: 'app-tarjetas',
	templateUrl: './tarjetas.component.html',
	styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {

	@Input() public array: Array<ProductoInterface> = [];
	@Input() public wrap: boolean = true;

	constructor(private router: Router) { }

	ngOnInit() { }

	goToDetail(producto) {
		this.router.navigate(['/product-detail', producto.idunico]);
	}

}
