import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ProductoInterface } from '@interfaces/producto.interface';
import { CartService } from '@services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {

  @Input() public producto: ProductoInterface;
  @Output() close = new EventEmitter<boolean>();
  public color: string = null;
  public cantidad = 1;
  public pedido: any[];

  constructor(
    public toastController: ToastController,
    private cartService: CartService,
    private router: Router
  ) {
    this.pedido = [];
  }

  ngOnInit() {
    const pedido = JSON.parse(localStorage.getItem('APP_PEDIDO'));
    if (pedido) {
      this.pedido = pedido;
      console.log(this.pedido);
    } else {
      this.pedido = [];
    }
  }

  async presentToast(message, color?) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
      color,
    });
    toast.present();
  }

  public closeModal(): void {
    this.close.emit(false);
  }

  public adicionar(): void {
    if (this.cantidad >= this.producto.cantidad) {
      this.presentToast('La cantidad solicitada supera la cantidad en el inventario', 'danger');
    } else {
      this.cantidad++
    }
  }

  public restar(): void {
    if (this.cantidad === 1) {
      this.cantidad = 1;
    } else {
      this.cantidad--;
    }
  }

  public validation(): boolean {
    if (this.producto.colores) {
      if (this.producto.colores.length > 0) {
        if (this.color === null) {
          return false;
        }
      }
    }
    return true;
  }

  public addCar(): void {
    const usuario: any = JSON.parse(localStorage.getItem('APP_USER'));
    if (usuario) {
      if (this.validation()) {
        if (this.cantidad > this.producto.cantidad) {
          this.presentToast('La cantidad solicitada supera la cantidad en el inventario', 'danger');
          return;
        } else {
          this.pedido.push({ producto: this.producto, cantidad: this.cantidad, color: this.color });
          this.cartService.administrarProducto(this.pedido);
          this.presentToast('Producto Agregado', 'success');
        }
      } else {
        this.presentToast('Por favor elija un color', 'warning');
      }
    } else {
      Swal.fire('', 'Antes de agregar el producto al carrito, necesitamoms tus datos para realizar el pedido', 'info');
      this.router.navigate(['/perfil']);
    }
  }
}
