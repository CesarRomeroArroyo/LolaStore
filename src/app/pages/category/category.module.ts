import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';
import { ComponentsModule } from '@components/components.module';

import { CategoryPage } from './category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
