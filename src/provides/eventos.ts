import { Injectable } from '@angular/core';
import firebase, { database } from 'firebase';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AuthProvider } from '../provides/auth'
import { DatePipe } from '@angular/common';

@Injectable()
export class EventosProvider {   

    constructor (
        public afStore : AngularFirestore, 
        private authProvider :AuthProvider,
        public datePipe : DatePipe
    ){}

    //salva o evento no banco
    public postEvento (evento) {
        //cria um chave para o evento
        let key = this.datePipe.transform(new Date(),"ddMMyyyyHHmmss");  
        evento.id = key;
        return firebase.database().ref('eventos/'+key).set({
            local : evento.local,        
            titulo : evento.titulo,
            dataFim : evento.dataFim,
            dataInicio : evento.dataInicio,
            horaInicio : evento.horaInicio,
            horaFim : evento.horaFim,        
            tema : evento.tema,
            usuario : evento.usuario,
            id : evento.id
        });
    }

    public editar(evento) {
        
        return firebase.database().ref('eventos/'+evento.id).set(evento);
    }

    public getEventos (callback) {
        let listEventos = [];
        let eventos = firebase.database().ref('eventos');
        eventos.on('value',(snapshot)=>{
            snapshot.forEach(element => {              
                //pega o uid do usuario logado
                let emailUser = this.authProvider.getEmailUser();                       
                if(element.val().usuario == this.authProvider.getEmailUser()) {
                    let evento = element.val();

                    let latitude = element.val().local.replace('(',"").replace(')','').split(',');
                    let lat = parseFloat(latitude[0]);
                    let lng = parseFloat(latitude[1]);
                    window.setInterval(()=>{
                        //cria uma foto do ponto no mapa                
                    evento.map =  "https://maps.googleapis.com/maps/api/staticmap?center=" +
                    lat + "," + lng +
                    "&zoom=15&size=400x400" +
                    "&markers=color:red%7Clabel:S%7C" +
                    lat + "," + lng +
                    "&maptype=roadmap&key=AIzaSyCxuFgcc8nFa1gyxtqv4cZC_lYah2DZhCU";
                    } , 1500);
                    listEventos.push(evento);
                }
            });
        })
        callback(listEventos);
    }

    public getEventosAll (callback) {
        let listEventos = [];
        let eventos = firebase.database().ref('eventos');
        eventos.on('value',(snapshot)=>{
            snapshot.forEach(element => {              
                let evento = element.val();
                let latitude = element.val().local.replace('(',"").replace(')','').split(',');
                let lat = parseFloat(latitude[0]);
                let lng = parseFloat(latitude[1]);
                window.setInterval(()=>{
                    //cria uma foto do ponto no mapa                
                evento.map =  "https://maps.googleapis.com/maps/api/staticmap?center=" +
                lat + "," + lng +
                "&zoom=15&size=400x400" +
                "&markers=color:red%7Clabel:S%7C" +
                lat + "," + lng +
                "&maptype=roadmap&key=AIzaSyCxuFgcc8nFa1gyxtqv4cZC_lYah2DZhCU";
                } , 1500);
                listEventos.push(evento);
                })
            });
        callback(listEventos);
        
    }
    

    //remove o evento
    public removeEventos(evento){
        firebase.database().ref('eventos/'+evento.id).remove();
    }
}