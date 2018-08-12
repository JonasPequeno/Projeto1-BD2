import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoRotaPage } from './evento-rota';

@NgModule({
  declarations: [
    EventoRotaPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoRotaPage),
  ],
})
export class EventoRotaPageModule {}
