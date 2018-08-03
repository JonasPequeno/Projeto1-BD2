import { Injectable } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import firebase from 'firebase';

@Injectable()
export class FirebaseProvider {
    constructor(public afs : AngularFirestore){}

    //create user on Firebase
    postUser( user ) {
        return firebase.database().ref('users/'+user.uid).set({
            nome : user.nome,
            email : user.email,
            curso : user.curso,
            instituicao : user.instituicao,

        });    
    }
    
    
}