import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss'],
})
export class FavoritoComponent implements OnInit {
  @Input() producto: any;
  incluido: boolean;
  constructor(
    private firebase: FirebaseService,
    private router: Router
  ) { 
    this.incluido = false;
  }

  async ngOnInit() {
    var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
    if(usuario){
      var userWeb = await this.firebase.obtenerUniqueIdPromise("clientes", usuario.idunico);
      if(userWeb.length > 0){
        if(userWeb[0].favoritos){
          var verificarFavorito = userWeb[0].favoritos.filter((fa) => {
            return fa.id == this.producto.id;
          });
          if(verificarFavorito.length > 0){
            this.incluido = true;
          }
        }
      }
    }
  }

  async administrarFavorito(){
    var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
    if(usuario){
      var userWeb = await this.firebase.obtenerUniqueIdPromise("clientes", usuario.idunico);
      if(userWeb.length > 0){
        if(userWeb[0].favoritos){
          if(!this.incluido){
            this.incluido = true;
            userWeb[0].favoritos.push(this.producto);
            await this.firebase.actualizarDatos("clientes", userWeb[0], userWeb[0].id);
            localStorage.setItem('APP_USER', JSON.stringify(userWeb[0]));
          } else {
            this.incluido = false;
            userWeb[0].favoritos = userWeb[0].favoritos.filter((fa) => {
              return fa.id != this.producto.id;
            });
            await this.firebase.actualizarDatos("clientes", userWeb[0], userWeb[0].id);
            localStorage.setItem('APP_USER', JSON.stringify(userWeb[0]));
          }
        } else {
          if(!this.incluido){
            this.incluido = true;
            userWeb[0]['favoritos'] = [];
            userWeb[0].favoritos.push(this.producto);
            await this.firebase.actualizarDatos("clientes", userWeb[0], userWeb[0].id);
            localStorage.setItem('APP_USER', JSON.stringify(userWeb[0]));
          }
        }
      } else {
        Swal.fire("", "Antes de agregar el producto a tus favoritos, necesitamoms tus datos", "info");
        this.router.navigate(["/perfil"]);
      }
    }
    else {
      Swal.fire("", "Antes de agregar el producto a tus favoritos, necesitamoms tus datos", "info");
      this.router.navigate(["/perfil"]);
    }
  }
}
