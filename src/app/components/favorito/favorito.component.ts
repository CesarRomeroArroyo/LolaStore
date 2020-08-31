import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss'],
})
export class FavoritoComponent implements OnInit {
  @Input() producto: any;
  incluido: boolean;
  constructor(
    private firebase: FirebaseService
  ) { 
    this.incluido = false;
  }

  async ngOnInit() {
    var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
    var userWeb = await this.firebase.obtenerUniqueIdPromise("clientes", usuario.idunico);
    if(userWeb[0].favoritos){
      var verificarFavorito = userWeb[0].favoritos.filter((fa) => {
        return fa.id == this.producto.id;
      });
      if(verificarFavorito.length > 0){
        this.incluido = true;
      }
    }
  }

  async administrarFavorito(){
    var usuario: any = JSON.parse(localStorage.getItem("APP_USER"));
    var userWeb = await this.firebase.obtenerUniqueIdPromise("clientes", usuario.idunico);
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
  }
}
