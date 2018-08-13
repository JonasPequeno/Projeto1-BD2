import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//importando o modulo da Pagina login
import { LoginPageModule } from '../pages/login/login.module';
import { RegistroPageModule } from '../pages/registro/registro.module';
import { HomePage } from  '../pages/home/home';
import { EventoModalPage } from '../pages/evento-modal/evento-modal';
import { MeusEventosPage } from '../pages/meus-eventos/meus-eventos';
import { PerfilPage } from '../pages/perfil/perfil';
import { EventoRotaPage } from '../pages/evento-rota/evento-rota';
import { AllEventosPage } from '../pages/all-eventos/all-eventos'
import { ParticipantesPage } from '../pages/participantes/participantes';
//importações do firebase e angular fire
import { firebaseConfig } from '../configs/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//provides 
import { AuthProvider } from '../provides/auth';
import { FirebaseProvider } from '../provides/firebase';
import {  Geolocation } from "@ionic-native/geolocation";
import { EventosProvider } from '../provides/eventos';
import { DatePipe} from '@angular/common';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventoModalPage,
    MeusEventosPage,
    PerfilPage,
    EventoRotaPage,
    AllEventosPage,
    ParticipantesPage
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
    HomePage,
    PerfilPage, 
    EventoModalPage,
    MeusEventosPage,
    EventoRotaPage,
    AllEventosPage,
    ParticipantesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DatePipe,
    FirebaseProvider,
    EventosProvider,
    Geolocation,
    
  ]
})
export class AppModule {
  
}
