import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController  } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';
import { EventoRotaPage } from '../evento-rota/evento-rota'
import { Geolocation } from '@ionic-native/geolocation';
import * as Geolib from 'geolib';

declare var google : any;


@IonicPage()
@Component({
  selector: 'page-meus-eventos',
  templateUrl: 'meus-eventos.html',
})
export class MeusEventosPage implements OnInit {
  private listEventos = [] ;
  private map : any;
  private rua : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventProvider : EventosProvider,
    public toastCrtl : ToastController,
    public alertCrtl : AlertController,
    public geolocation : Geolocation,
  ) {}

  ngOnInit() {
    this.eventProvider.getEventos((eventos) =>{
      this.listEventos = eventos;
    });    
       
    this.getDistanciaAll();
    
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

  calculaDistancia(origem, destino) {
    let distancia = Geolib.getDistance(origem, destino);
    return Geolib.convertUnit('km',distancia,2);
  }

  getDistanciaAll () {
    this.geolocation.getCurrentPosition()
    .then((result) =>{
      for(let i=0; i<this.listEventos.length; i++) {
        let evento = this.listEventos[i];
        let latitude = evento.local.replace('(',"").replace(')','').split(',');

        let lat = parseFloat(latitude[0]);
        let lng = parseFloat(latitude[1]);       
        
        let latlng = new google.maps.LatLng(lat,lng);
        
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({location : latlng}, (result, status) => {
          if(status === google.maps.GeocoderStatus.OK) {
            let endereco = result[0].formatted_address.split(',');
            console.log('Endereco  ' , endereco[0])
            this.rua = endereco[0];
          }
        })

        evento.distancia = this.calculaDistancia(
          {latitude:result.coords.latitude,longitude: result.coords.longitude} ,
          {latitude:lat, longitude : lng}
        )
      }
    })
  }
}
