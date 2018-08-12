import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation'

declare var google : any;

@IonicPage()
@Component({
  selector: 'page-evento-rota',
  templateUrl: 'evento-rota.html',
})
export class EventoRotaPage implements OnInit {

  private directions : any;
  private map : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation : Geolocation,
    public platform : Platform

    ) { }

  ngOnInit(): void {
    //pega as cooo passadas
    this.directions = this.navParams.get('directions');
    alert(this.directions.latitude+ "   "+ this.directions.longitude );
    this.platform.ready()
    .then(()=>{
      this.initMap();
    })  
  }

  initMap () {
      this.geolocation.getCurrentPosition()
      .then((res) => {
        
        let mapa = document.getElementById('rotaMap');
        this.map = new google.maps.Map(mapa);
        this.calcRota(res.coords.latitude, res.coords.longitude);
      })
  }

  calcRota (latitude, longitude) {
    let directionsRenderes = new google.maps.DirectionsRenderer();
    
    directionsRenderes.setMap(this.map);

    let origem = new google.maps.LatLng(latitude, longitude);
    let destino = new google.maps.LatLng(this.directions.latitude, this.directions.longitude);

    //desenar o trageto
    let directionsService = new google.maps.DirectionsService();

    let parametros = {
      origin : origem,
      destination :destino,
      travelMode: 'DRIVING'
    }

    directionsService.route(parametros, (result, status) => {
      if(status == 'OK') {
        console.log('entrou no if');
        directionsRenderes.setDirections(result);
      }
    })
  }
  

}
