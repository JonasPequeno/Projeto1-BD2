import { Injectable } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import firebase from 'firebase';
import { AuthProvider } from '../provides/auth';

@Injectable()
export class FirebaseProvider {
    constructor(
        public afs : AngularFirestore,
        public authProvider : AuthProvider
    ){}

    //create user on Firebase
    postUser( user ) {
        return firebase.database().ref('users/'+user.uid).set({
            nome : user.nome,
            email : user.email,
            curso : user.curso,
            instituicao : user.instituicao,

        });    
    }
    
    getUser(callback) : any {
         firebase.database().ref('users/'+this.authProvider.getEmailUser()).on('value', user =>{ 
            let usuario = {
                nome : user.val().nome,
                email : user.val().email,
                curso : user.val().curso,
                instituicao : user.val().instituicao
            }
            callback(usuario)
        })    
    }    
}