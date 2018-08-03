import { Component } from '@angular/core';
import { NavController, Platform, ViewController, ModalController, NavParams, Alert} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {EventoModalPage} from '../evento-modal/evento-modal';
import { EventosProvider } from '../../provides/eventos';
import { IfStmt } from '@angular/compiler';
import { AuthProvider } from '../../provides/auth';

declare var google : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private map : any;
  private evento = {id: '' , titulo : '', periodo : '', tema : '', local : '', usario : ''};
  private endereco;

  constructor(public navCtrl: NavController, public platform : Platform,
    public geolocation : Geolocation,
    public navParms : NavParams,
    public eventProvider : EventosProvider,  
    public modalCrtl : ModalController,
    public viewController : ViewController,
    public afProvider : AuthProvider

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
    this.eventProvider.getEventos();
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

      //evento de click
      this.map.addListener('click', ((e) =>{      
         let modal = this.modalCrtl.create(EventoModalPage);
         modal.onDidDismiss(data =>{
           if(data) {
            this.criaMarcador(e);   
            this.getEndereco(e.latLng , local =>{            
                let locali : string = ""+local.geometry.location;
                data.local = locali;
                let emailUser = this.afProvider.getEmailUser();
                alert(emailUser);
                data.usuario = emailUser;
                this.eventProvider.postEvento(data)
                .then((res) =>{
                 alert(res);
              })     
            })                 
           }       
         })
         modal.present();
      }));

      marcador.setMap(this.map);    
      //verificar se ta pegando o endereco correto
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
              successCallBack(results[0])
            }
          }
        })
      }
    
    public criaMarcador (event) {

      this.getEndereco(event.latLng , endereco => {
        this.endereco = endereco;

        let marcador = new google.maps.Marker({
          position : event.latLng,
          map : this.map,
          title : 'Novo Marcador'
        });
      })
    }
    
}
