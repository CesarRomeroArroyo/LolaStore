import { ComponentsModule } from '@components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialDetailPageRoutingModule } from './historial-detail-routing.module';

import { HistorialDetailPage } from './historial-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialDetailPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HistorialDetailPage]
})
export class HistorialDetailPageModule {}
