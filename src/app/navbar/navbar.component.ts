import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  movieSearch : string = "" ;
  constructor(private router: Router) {}
  @Output() searchChanged = new EventEmitter<string>();
  onsearch(){
    console.log(this.movieSearch);
   this.searchChanged.emit(this.movieSearch);
  }
  onAvatarClick() {
    console.log('Avatar clicked');
    this.router.navigate(['profile']);
  }

  onLogout() {
    console.log('Logout clicked');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
