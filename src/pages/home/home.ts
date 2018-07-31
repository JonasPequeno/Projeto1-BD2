import { Component } from '@angular/core';
import { NavController, Platform, ViewController, ModalController} from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';
//import { MapModalPage } from '../modal/mapModalPage';

declare var google : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private map : any;
  private evento = {titulo : '', periodo : '', tema : '', local : ''};
  private endereco;


  constructor(public navCtrl: NavController, public platform : Platform,
    //public geolocation : Geolocation,
    //public modalPage : MapModalPage,

    public modalCrtl : ModalController,
    public viewController : ViewController 
  ) {}

}
