import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  email: string = '';
  username: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  updateProfile() {
    const updatedUser = {
      email: this.email,
      username: this.username,
    };
    console.log('Updated user profile:', updatedUser);
  }
  changePassword(){
    
  }
}
