import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {
    constructor (public afAuth : AngularFireAuth){}

    //create user 
    resgister(data) {
        return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.senha);
        
    }

    //login 
    login (data) {
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.senha);
    }
}