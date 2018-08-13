import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login'
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../provides/auth';
import { MeusEventosPage } from '../pages/meus-eventos/meus-eventos';
import { PerfilPage } from '../pages/perfil/perfil';
import { AllEventosPage } from '../pages/all-eventos/all-eventos';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public perfil = PerfilPage;
  public rootPage : any = LoginPage;
  public home  = HomePage;
  public login = LoginPage;
  public meusEventos = MeusEventosPage;
  public todosEventos = AllEventosPage;
  public sair  = LoginPage;
  public isMenu: boolean = false;  
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public auth : AuthProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public trocaPagina (pagina) {
    this.rootPage = pagina;
  }
  
  

}

