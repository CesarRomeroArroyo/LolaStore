import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateApp } from '@services/state.service';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
	numProd: number;
	constructor(
		private router: Router,
		private state: StateApp
	) { 
		this.numProd = 0;
	}

	ngOnInit() {
		this.state.getObservable().subscribe((data) =>{
			if(data.pedido){
				this.numProd = data.pedido.length;
			}
		});

		const pedido = JSON.parse(localStorage.getItem("APP_PEDIDO"));
		if(pedido){
			this.numProd = pedido.length;
		} else {
			this.numProd = 0;
		}
	}

}
