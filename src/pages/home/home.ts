import { Component } from '@angular/core';
import { NavController, Platform, ViewController, ModalController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
    public geolocation : Geolocation,
    //public modalPage : MapModalPage,

    public modalCrtl : ModalController,
    public viewController : ViewController 
  ) {}

  ngOnInit(){
    //espera a pagina carregar por completo
    this.platform.ready().then(() =>{
      //pega minha posição atual
      this.geolocation.getCurrentPosition()
      .then((result) =>{
        this.initMap(result.coords.latitude, result.coords.longitude);
      })
      .catch((err) =>{
        console.log(err);
      })
    })
  }

  private initMap(lat, lng){
    let latLng = new google.maps.LatLng(lat,lng);

      let opcoes = {
        center: latLng,
        zoom : 18,
        //mapTypeId : google.maps.mapTypeId.ROADMAP
        disableDefaultUI : true
        //mapTypeId:google.maps.MapTypeId.SATELLITE,
      };
      let elemento = document.getElementById('map');
      this.map = new google.maps.Map(elemento,opcoes);

      let marcador = new google.maps.Marker({
        position : latLng,
      });

      marcador.setMap(this.map);    
      this.getEndereco(latLng, function(res){
        console.log(res);
        
      });
      

    }


    private getEndereco (latLng, successCallBack) {
        //pega o endereço da minha posição atual
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({location : latLng} , (results, status) =>{
          //verifica o codigo de status,
          if( status === google.maps.GeocoderStatus.OK) {
            console.log('entrou no if');
            if(results[0]) {
              successCallBack(results[0].formatted_address)
            }
          }
        })
      }

    
}
