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

    public postEvento (evento) {
    let key = this.datePipe.transform(new Date(),"ddMMyyyyHHmmss");  
    
       return firebase.database().ref('eventos/'+key).set({
           local : evento.local,
           titulo : evento.titulo,
           dataFim : evento.dataFim,
           dataInicio : evento.dataInicio,
           horaInicio : evento.horaInicio,
           horaFim : evento.horaFim,        
           tema : evento.tema,
           usuario : evento.usuario
       });
    }

    public getEventos () {
        let listEventos = [];
        let eventos = firebase.database().ref('eventos');
        eventos.on('value',(snapshot)=>{
            snapshot.forEach(element => {              
                let emailUser = this.authProvider.getEmailUser();                       
                if(element.val().usuario == this.authProvider.getEmailUser()) {
                    listEventos.push(element.val());
                }
            });
        })
        return listEventos;
    }
}