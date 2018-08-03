import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class EventosProvider {
    constructor (public afStore : AngularFirestore){}

    postEvento (evento) {
       return firebase.database().ref('eventos/'+evento.local).set({
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

    getEventos () {
        let eventos = firebase.database().ref('eventos');
        eventos.on('value',(snapshot)=>{
            console.log(snapshot.val());
        })
    }

}