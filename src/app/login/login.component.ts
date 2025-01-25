import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  onLogin(): void {
    this.appointmentService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login Successful:', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login Error:', error);
        this.errorMessage = 'Invalid username or password.';
      }
    );
  }
 
  logout(): void {
    this.router.navigate(['/login']);
  }
}
