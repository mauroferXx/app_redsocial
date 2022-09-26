import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabEtiquetasPage } from './tab-etiquetas.page';

const routes: Routes = [
  {
    path: '',
    component: TabEtiquetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabEtiquetasPageRoutingModule {}
