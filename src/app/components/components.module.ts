import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TagsComponent } from './tags/tags.component';

const components = [
	TagsComponent
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		RouterModule,
		IonicModule
	],
	exports: [components]
})
export class ComponentsModule { }
