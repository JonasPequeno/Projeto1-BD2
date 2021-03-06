import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../provides/auth';
import { FirebaseProvider } from "../../provides/firebase";
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  
  private login : boolean = true;
  private registro : boolean = false;
  private loginForm = {email : '', senha : ''};
  private registerForm = {email : '', nome : '', senha:'', curso : '', instituicao : ''};
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afProvider :AuthProvider,
    public fireProvader : FirebaseProvider,
    public loadCrtl : LoadingController,
    public toastCrtl : ToastController,
    public keyboard : Keyboard
  
  ){}

  ngOnInit(): void {
    
  }

criaConta () {
  this.login = false;
  this.registro = true;
}

acesaConta() {
  this.login = true;
  this.registro = false;  
}

fazerLogin () {
  let load = this.loadCrtl.create();
  load.present();
  this.afProvider.login(this.loginForm)
  .then((res) =>{    
    load.dismiss();
    console.log(res.user.email);
    this.navCtrl.setRoot(HomePage);
  })
  .catch((err) =>{
    load.present();
  })  

}
fazerCadastro() {
  let load = this.loadCrtl.create();
  load.present();
  this.afProvider.resgister(this.registerForm)
  
  .then((res)=>{
    let uid = res.user.uid;    
    console.log('usuario criado ' + res.user);
    
    //cria um novo objeto e grava no fireStorage
    let user = {
      uid : uid,
      nome : this.registerForm.nome,
      email : this.registerForm.email,
      instituicao : this.registerForm.instituicao,
      curso : this.registerForm.curso
    }
    this.fireProvader.postUser(user)
      .then(()=>{
        let toast = this.toastCrtl.create({
          message : 'Cadastro feito com sucesso !' ,
          duration : 2000,
          position: 'middle'
       })
       toast.present();
       this.login = true;
       this.registro = false;
      })
      
      load.dismiss();  
  })
  .catch((err)=> {
    console.log(err);
    
    load.dismiss();    
  })
}

}
