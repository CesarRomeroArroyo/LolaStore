import { Injectable } from '@angular/core';
import { StateApp } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private state: StateApp
  ) { }

  administrarProducto(pedido: any){
    this.state.setData({pedido: pedido});
    localStorage.setItem("APP_PEDIDO", JSON.stringify(pedido))
  }
}
