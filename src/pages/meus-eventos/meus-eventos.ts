import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController  } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';
import { EventoRotaPage } from '../evento-rota/evento-rota'


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
    public eventProvider : EventosProvider,
    public toastCrtl : ToastController,
    public alertCrtl : AlertController
  ) {}

  ngOnInit() {
    this.eventProvider.getEventos((eventos) =>{
      this.listEventos = eventos;
    });    
  }
  
  remover(evento) {
      let alert = this.alertCrtl.create({
        title : 'Excluir',
        subTitle : 'Deseja realmente realmente excluir o evento : '+evento.titulo+'?',
        buttons : [{
            text : 'Confirmar',
            handler : ()=>{
              let pos = this.listEventos.indexOf(evento);
              this.eventProvider.removeEventos(evento);
              this.listEventos.splice(pos, 1); 
              this.eventProvider.getEventos((eventos) =>{
                this.listEventos = eventos;
              });            
            }
        },
        {
            text : 'Cancelar',
            handler :() =>{
                alert.onDidDismiss;
            }
        }
    ]
    });
     alert.present();

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
