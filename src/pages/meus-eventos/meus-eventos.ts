import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';


declare var google : any;

@IonicPage()
@Component({
  selector: 'page-meus-eventos',
  templateUrl: 'meus-eventos.html',
})
export class MeusEventosPage implements OnInit {
  private listEventos = [] ;
  private map : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventProvider : EventosProvider
  ) {}

  ngOnInit() {
    this.eventProvider.getEventos((eventos) =>{
      this.listEventos = eventos;
    });    
  }
  
  remover(evento) {
    let pos = this.listEventos.indexOf(evento);
    alert(pos);
    this.eventProvider.removeEventos(evento);
    this.listEventos.splice(pos, 1);
    
  }    
}
