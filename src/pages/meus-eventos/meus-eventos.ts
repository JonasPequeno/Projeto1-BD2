import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';

@IonicPage()
@Component({
  selector: 'page-meus-eventos',
  templateUrl: 'meus-eventos.html',
})
export class MeusEventosPage implements OnInit {
  private listEventos = {} ;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventProvider : EventosProvider
  ) {}

  ngOnInit() {
    this.listEventos = this.eventProvider.getEventos();    
    console.log(this.listEventos);
  }


  


}
