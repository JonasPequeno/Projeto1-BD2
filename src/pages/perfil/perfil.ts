import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../provides/firebase';
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage implements OnInit {
  private user = {
    nome : "",
    email : "",
    curso : "",
    instituicao : ""
  };
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public fire : FirebaseProvider
    ) { 
    }
    
    ngOnInit(): void {
      this.fire.getUser((usuario) => {
        this.user = usuario;
        console.log("baby baby: ", this.user)
      });
    }
}
