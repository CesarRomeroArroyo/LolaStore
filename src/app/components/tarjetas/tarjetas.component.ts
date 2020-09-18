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
  @Input() public wrap = true;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.array);
    }, 1000);
  }

  public calculoDescuento(producto: ProductoInterface): number {
    const descuento = producto.precio * (producto.descuento / 100);
    const resultado = producto.precio - descuento;
    return resultado;
  }

  public goToDetail(producto: ProductoInterface): void {
    this.router.navigate(['/product-detail', producto.idunico]);
  }
}
