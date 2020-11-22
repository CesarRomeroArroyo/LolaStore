import { ProductoInterface } from './../../models/producto.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { FirebaseService } from '@services/firebase.service';
import { StateApp } from '@services/state.service';
import { CartService } from '@services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  pedido: any[];
  producto: ProductoInterface;
  cantidad = 1;
  colorSelected = '';

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseSvc: FirebaseService,
    private state: StateApp,
    public toastController: ToastController,
    private cartService: CartService) {
    this.pedido = [];
  }

  ngOnInit() {
    this.init();
  }

  init() {
    const pedido = JSON.parse(localStorage.getItem('APP_PEDIDO'));
    if (pedido) {
      this.pedido = pedido;
    } else {
      this.pedido = [];
    }
    this.route.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.firebaseSvc.obtenerUniqueId('productos', id).subscribe((prod: any) => {
        this.producto = prod[0];
        if (!this.producto.fotos) {
          this.producto.fotos = [];
          this.producto.urls = [];
        }
        console.log(this.producto);
      })
    })
  }

  async presentToast(message, color?) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
      color,
    });
    toast.present();
  }

  back() {
    window.history.back();
  }

  validation() {
    if (this.producto.colores) {
      if (this.producto.colores.length > 0) {
        if (this.colorSelected === '') {
          return false;
        }
      }
    }
    return true;
  }

  adicionar() {
    if (this.cantidad >= this.producto.cantidad) {
      this.presentToast('La cantidad solicitada supera la cantidad en el inventario', 'danger');
    } else {
      this.cantidad++
    }
  }

  restar() {
    if (this.cantidad === 1) {
      this.cantidad = 1;
    } else {
      this.cantidad--;
    }
  }

  public calculoDescuento(producto: ProductoInterface): number {
    const descuento = producto.precio * (producto.descuento / 100);
    const resultado = producto.precio - descuento;
    return resultado;
  }

  public addCar(): void {
    const usuario: any = JSON.parse(localStorage.getItem('APP_USER'));
    if (usuario) {
      if (this.validation()) {
        if (this.cantidad > this.producto.cantidad) {
          this.presentToast('La cantidad solicitada supera la cantidad en el inventario', 'danger');
          return;
        } else {
          this.pedido.push({ producto: this.producto, cantidad: this.cantidad, color: this.colorSelected });
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
