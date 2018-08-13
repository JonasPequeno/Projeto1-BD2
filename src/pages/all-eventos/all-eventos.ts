import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosProvider } from '../../provides/eventos';
import { EventoRotaPage } from '../evento-rota/evento-rota';
import { Geolocation} from '@ionic-native/geolocation';
import * as Geolib from 'geolib';
import { AuthProvider } from '../../provides/auth';

declare var google : any;

@IonicPage()
@Component({
  selector: 'page-all-eventos',
  templateUrl: 'all-eventos.html',
})
export class AllEventosPage implements OnInit{
  
  private listEventos = [];
  private rua : any;
  private status : boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eventProvider : EventosProvider,
    public geolocation : Geolocation,
    public auth : AuthProvider,

  ) {}

  ngOnInit(): void {
    this.eventProvider.getEventosAll((eventos) =>{
      this.listEventos = eventos;
      console.log('Eventos ' + eventos)
    });
     
    this.getDistanciaAll();
  
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

  marcaPresenca(evento) {
    this.status = true;
    evento.presenca = [];
    evento.presenca.push(this.auth.getEmail());
    console.log(evento.presenca);
    
    this.eventProvider.editar(evento);

  }

}
