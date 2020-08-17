import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { ComponentsModule } from '@components/components.module';
import { ModalsModule } from '@modals/modals.module';

import { PerfilPage } from './perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ComponentsModule,
    ModalsModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
