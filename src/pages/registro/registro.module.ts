import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPage } from './registro';

@NgModule({
  declarations: [
    RegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPage),
  ],
})
export class RegistroPageModule {}
