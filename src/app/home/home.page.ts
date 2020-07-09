import { Component, OnInit } from '@angular/core';
import { FireChatService } from '../service/fire-chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user = '';
  message = '';
  messages = [];
  id = '';

  enviar(){
    const data = {
      mensaje : this.message,
      nombre : this.user
    };
    this.fs.mandarMsj(data, this.id);
  }

  cantidad(){
    this.fs.registros();
  }

  constructor(private fs: FireChatService) {
  }
  ngOnInit(): void {
    this.fs.getmensajes().subscribe((msjSnap) => {
      this.messages = [];
      msjSnap.forEach((msjData: any) => {
        this.id = msjData.payload.doc.id;
        this.messages.push({
          message: msjData.payload.doc.data().mensaje,
          user: msjData.payload.doc.data().nombre
        });
      });
    });
  }
}

