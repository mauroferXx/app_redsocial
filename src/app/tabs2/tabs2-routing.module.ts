import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs2Page } from './tabs2.page';

const routes: Routes = [
  {
    path: 'tabs2',
    component: Tabs2Page,
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs2/perfil',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs2PageRoutingModule {}
