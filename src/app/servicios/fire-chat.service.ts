import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FireChatService {

  IDAuto: string;

  constructor(private firestore: AngularFirestore) { }

  public getmensajes() {
    return this.firestore.collection('mensajes').snapshotChanges();
  }

  public getusuarios() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  public mandarMsj(data: { mensaje: string; nombre: string, time: Date }) {
    // let aux = 1;
    // aux = id;
    // aux++;
    // id = aux;
    return this.firestore.collection('mensajes').add(data);
  }

  public nuevoNick(data: { email: string; nick: string}) {
    // let aux = 1;
    // aux = id;
    // aux++;
    // id = aux;
    return this.firestore.collection('usuarios').add(data);
  }
  public registros() { }
}
