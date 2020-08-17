import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DireccionesComponent } from './direcciones/direcciones.component';

@NgModule({
	declarations: [DireccionesComponent],
	imports: [
		CommonModule,
		IonicModule,
		FormsModule
	],
	exports: [
		DireccionesComponent
	]
})
export class ModalsModule { }
