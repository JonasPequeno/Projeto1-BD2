import { Injectable } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable()
export class FirebaseProvider {
    constructor(public afs : AngularFirestore){}

    //create user on Firebase
    postUser( user ) {
        console.log('usario recebido ' +user);
        //setando o usuario na coleção users com o uid
        this.afs.collection("users").doc(user.uid).set(user);
    }
}