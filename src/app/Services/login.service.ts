import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoginUrl = "http://localhost:49014/api/Login";
  RegisterUrl = "";
  constructor(private http: HttpClient) {}
  login(body:any) {
    return this.http.post(this.LoginUrl, body);
   }
  register(body:any) {
    return this.http.post(this.RegisterUrl, body);
  }
}