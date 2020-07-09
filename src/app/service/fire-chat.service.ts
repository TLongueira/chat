import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable({
  providedIn: "root",
})
export class FireChatService {
  IDAuto: string;

  constructor(private firestore: AngularFirestore) { }

  public getmensajes() {
    return this.firestore.collection("mensajes").snapshotChanges();
  }

  public mandarMsj(data: { mensaje: string; nombre: string }, id: any) {
    let aux = 1;
    aux = id;
    aux++;
    id = aux;
    return this.firestore.collection("mensajes").doc(id.toString()).set(data);
  }
  public registros() { }
}
