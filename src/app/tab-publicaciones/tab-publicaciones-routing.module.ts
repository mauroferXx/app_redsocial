import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPublicacionesPage } from './tab-publicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: TabPublicacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPublicacionesPageRoutingModule {}
