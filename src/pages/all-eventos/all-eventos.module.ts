import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllEventosPage } from './all-eventos';

@NgModule({
  declarations: [
    AllEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(AllEventosPage),
  ],
})
export class AllEventosPageModule {}
