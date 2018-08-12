import { Injectable } from '@angular/core';
import firebase from 'firebase';
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

    public getEventos (callback) {
        let listEventos = [];
        let eventos = firebase.database().ref('eventos');
        eventos.on('value',(snapshot)=>{
            snapshot.forEach(element => {              
                //pega o uid do usuario logado
                let emailUser = this.authProvider.getEmailUser();                       
                if(element.val().usuario == this.authProvider.getEmailUser()) {
                    let evento = element.val();
                    let latitude = evento.local.replace('(',"").replace(')','').split(',');
                    //cria uma foto do ponto no mapa
                    evento.map =  "https://maps.googleapis.com/maps/api/staticmap?center=" +
                    latitude[0] + "," + latitude[1] +
                    "&zoom=15&size=400x400" +
                    "&markers=color:red%7Clabel:S%7C" +
                    latitude[0] + "," + latitude[1] +
                    "&maptype=roadmap&key=AIzaSyBx-WZzpi4YDO9vrIBjZDqWv7_nU3u5-Bs";


                    listEventos.push(evento);
                }
            });
            callback(listEventos);
        })
    }

    public getEventosAll (callback) {
        let listEventos = [];
        let eventos = firebase.database().ref('eventos');
        eventos.on('value',(snapshot)=>{
            snapshot.forEach(element => {              
                //pega o uid do usuario logado
                    let evento = element.val();                                    
                    listEventos.push(evento);
                })
                callback(listEventos);
            });
           
    }
    

    //remove o evento
    public removeEventos(evento){
        alert(evento.id)
        firebase.database().ref('eventos/'+evento.id).remove();
    }
}