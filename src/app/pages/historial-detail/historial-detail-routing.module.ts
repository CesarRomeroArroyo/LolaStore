import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialDetailPage } from './historial-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialDetailPageRoutingModule {}
