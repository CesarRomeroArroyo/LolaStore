import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'
import { TagsComponent } from './tags/tags.component';
import { DireccionesComponent } from './direcciones/direcciones.component';

const components = [
	TagsComponent,
	DireccionesComponent
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
