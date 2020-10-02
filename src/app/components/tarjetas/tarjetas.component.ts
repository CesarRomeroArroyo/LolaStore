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
  public producto: ProductoInterface;
  public show = false;

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

  public addCar(producto: ProductoInterface): void {
    this.producto = producto;
    this.show = true;
  }

  public redirecTo(path: string, idunico: string): void {
    this.router.navigate([`${path}/${idunico}`]);
  }

  public showModal(e): void {
    this.show = e;
  }
}
