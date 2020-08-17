import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email: string;

  public getemail(){
return this.email;
  }

  public setemail(email: string){
    this.email = email;
  }

  constructor(private AFauth: AngularFireAuth) { }

  login(email: string, password: string) {

    return new Promise(((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(err => {
        rejected(err);
      });
    }));
  }

  registrar(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
