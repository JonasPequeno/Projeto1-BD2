import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//importando o modulo da Pagina login
import { LoginPageModule } from '../pages/login/login.module';
import { RegistroPageModule } from '../pages/registro/registro.module';
import { HomePage } from  '../pages/home/home';
//importações do firebase e angular fire
import { firebaseConfig } from '../configs/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//provides 
import { AuthProvider } from '../provides/auth';
import { FirebaseProvider } from '../provides/firebase';
import {  Geolocation } from "@ionic-native/geolocation";



import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    LoginPageModule,
    RegistroPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseProvider,
    Geolocation
  ]
})
export class AppModule {}
