import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  registrarme() {
    this.router.navigate(['/register']);
  }

  onSubmitLogin() {
    this.authService.setemail(this.email);
    this.authService.login(this.email, this.password).then(res => {
      // console.log(res);
      this.router.navigate(['/home']);
    }).catch(err => {
      alert('datos erroneos');
    });
  }
}
