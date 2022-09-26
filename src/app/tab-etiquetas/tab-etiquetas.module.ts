import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEtiquetasPageRoutingModule } from './tab-etiquetas-routing.module';

import { TabEtiquetasPage } from './tab-etiquetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEtiquetasPageRoutingModule
  ],
  declarations: [TabEtiquetasPage]
})
export class TabEtiquetasPageModule {}
