import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoModalPage } from './evento-modal';

@NgModule({
  declarations: [
    EventoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoModalPage),
  ],
})
export class EventoModalPageModule {}
