import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPublicacionesPageRoutingModule } from './tab-publicaciones-routing.module';

import { TabPublicacionesPage } from './tab-publicaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPublicacionesPageRoutingModule
  ],
  declarations: [TabPublicacionesPage]
})
export class TabPublicacionesPageModule {}
