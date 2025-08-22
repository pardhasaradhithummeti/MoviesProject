import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url = "http://localhost:49014/api/Login";
  isLoginMode = true ;
  username: string = '';
  confirmPassword: string = '';
  isLogin = false;
    email: string= '';
    password : string = '';
    constructor(private router: Router ,private logService: LoginService ){
    }
  submit(){
    const body = { email: this.email, password: this.password };

    this.logService.login(body).subscribe({
      next: (response : any) => {
        console.log('Login successful:', response);
        const token = response.token;
        localStorage.setItem("token" , token);
        this.isLogin = true;
        this.router.navigate(['home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }

    });
  }
  switchMode(){
    this.isLoginMode = !this.isLoginMode;

  }
}
