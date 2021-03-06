import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {
    constructor (public afAuth : AngularFireAuth){}

    //create user 
    resgister(data) {
        return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.senha);
    }

    getEmailUser() {
        return this.afAuth.auth.currentUser.uid;
    }

    getEmail() {
        console.log('retorno do email no auth ' +  this.afAuth.auth.currentUser.email);
        return this.afAuth.auth.currentUser.email;
    }
    

    //login 
    login (data) {
        return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.senha);
    }

    //sair 
    logout() {
        return this.afAuth.auth.signOut();
    }

}