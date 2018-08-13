import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    LoginPage,
    
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers :[
    Keyboard
  ]
})
export class LoginPageModule {}
