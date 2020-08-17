import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;
  constructor(private authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister() {
    this.authService.registrar(this.email, this.password).then(res => {
      this.router.navigate(['/login']);
    }).catch(err =>{
      alert('datos erroneos');
    });
  }

}
