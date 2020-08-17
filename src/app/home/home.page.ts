import { Component, OnInit } from '@angular/core';
import { FireChatService } from '../servicios/fire-chat.service';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user = '';
  users = [];
  message = '';
  messages = [];
  id = '';
  existe = false;

  constructor(private authService: AuthService,
              private fs: FireChatService,
              public router: Router) { }

  ngOnInit(): void {

    if (this.authService.getemail() === undefined) {
      this.router.navigate(['/login']);
    }
    this.fs.getmensajes().subscribe((msjSnap) => {
      this.messages = [];
      msjSnap.forEach((msjData: any) => {
        this.id = msjData.payload.doc.id;
        this.messages.push({
          message: msjData.payload.doc.data().mensaje,
          user: msjData.payload.doc.data().nombre,
          time: msjData.payload.doc.data().time,
        });
      });
      // console.log(this.messages);
      this.messages.sort((a, b) => {
        return a.time - b.time;
      });
      // console.log(this.messages);
    });
    // console.log(this.authService.getemail());

    this.fs.getusuarios().subscribe((usuSnap) => {
      this.users = [];
      usuSnap.forEach((usuData: any) => {
        this.users.push({
          email: usuData.payload.doc.data().email,
          nick: usuData.payload.doc.data().nick,
        });
      });
      // console.log(this.users);

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.users.length; i++) {
        const element = this.users[i];
        if (this.users[i].email === this.authService.getemail()) {
          console.log(this.users[i].email);
          console.log(this.authService.getemail());
          this.existe = true;
          this.user = this.users[i].nick;
        }
      }
    });
  }

guardarNick(){
  const data = {
    email: this.authService.getemail(),
    nick: this.user,
  };
  this.fs.nuevoNick(data);
  this.existe = true;
}

  enviar() {
    const data = {
      mensaje: this.message,
      nombre: this.user,
      time: new Date(),
    };
    this.fs.mandarMsj(data);
    this.message = ' ';
  }
}
