import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';

@IonicPage()
@Component({
  selector: 'page-participantes',
  templateUrl: 'participantes.html',
})
export class ParticipantesPage implements OnInit {
 
  private listEventos = [];
  private listParticipantes = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider : EventosProvider,
    ) {
  }

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes () {
    let event = this.navParams.get('evento');
    console.log('evento recebido ' + event.tema);

    this.eventProvider.getEventosAll((eventos) =>{
      this.listEventos = eventos;
      console.log(this.listEventos);  
      this.listEventos.forEach(element => {
        if(element.id == event.id) {
          this.listParticipantes = element.presenca;
        }       
      });
    });

  }
}
