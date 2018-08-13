import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';
import { EventoRotaPage } from '../evento-rota/evento-rota';

declare var google : any;

@IonicPage()
@Component({
  selector: 'page-all-eventos',
  templateUrl: 'all-eventos.html',
})
export class AllEventosPage implements OnInit{
  
  private listEventos = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider : EventosProvider,
  ) {}

  ngOnInit(): void {
    this.eventProvider.getEventos((eventos) =>{
      this.listEventos = eventos;
    });
  }

  openRoute(evento) {
    let coo = evento.local.replace('(','').replace(')','').split(',');              
    let lat = parseFloat(coo[0]);
    let lng = parseFloat(coo[1]);
    let latlng = new google.maps.LatLng(lat,lng);
    let directions = {latitude : lat, longitude : lng}
    this.navCtrl.push(EventoRotaPage, {directions});
  }


}
