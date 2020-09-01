import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-calificar',
	templateUrl: './calificar.component.html',
	styleUrls: ['./calificar.component.scss'],
})
export class CalificarComponent implements OnInit {

	@Input() public pedido: any;
	@Output() public show = new EventEmitter<boolean>();
	public star = [5, 4, 3, 2, 1];
	public stars: number = null;
	public comentario: string = null;
	public atencion: string = "Califica nuestro servicio";

	constructor(private firebaseSvc: FirebaseService) { }

	ngOnInit() { }

	close() {
		this.show.emit(false);
	}

	selectStart(i: number) {
		this.stars = i + 1;
		console.log(this.stars);
		this.atencion = this.calificacionSelected(i);
	}

	calificacionSelected(i) {
		switch (i) {
			case 0: {
				return "Muy mala"
			}
				break;
			case 1: {
				return "Mala"
			}
				break;
			case 2: {
				return "Regular"
			}
				break;
			case 3: {
				return "Buena"
			}
				break;
			case 4: {
				return "Excelente"
			}
				break;
			default:
				break;
		}
	}

	validation() {
		if (this.atencion === "Califica nuestro servicio" || this.stars === null)
			return false;
		else
			return true;
	}

	calificar() {
		if(this.validation()) {
			this.pedido['estrellas'] = this.stars;
			this.pedido['comentario'] = this.comentario;
			this.pedido['atencion'] = this.atencion;
			this.pedido['estado'] = 2;
			this.firebaseSvc.actualizarDatos('pedidos', this.pedido, this.pedido.id).then(() => {
				Swal.fire("", "¡Gracias por elegirnos!", "success");
				this.close()
			})
		} else {
			Swal.fire("", "Por favor califica nuestro servicio", "info");
		}
	}
}
