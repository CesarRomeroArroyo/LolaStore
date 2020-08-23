import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'
import { TagsComponent } from './tags/tags.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { DescuentosComponent } from './descuentos/descuentos.component';

const components = [
	TagsComponent,
	DireccionesComponent,
	DescuentosComponent
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		RouterModule,
		IonicModule,
		FormsModule
	],
	exports: [components]
})
export class ComponentsModule { }
