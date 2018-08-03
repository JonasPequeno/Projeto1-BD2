import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusEventosPage } from './meus-eventos';

@NgModule({
  declarations: [
    MeusEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusEventosPage),
  ],
})
export class MeusEventosPageModule {}
