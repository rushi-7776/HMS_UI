import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppointmentService } from '../appointment.service'; // Import your service
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterLink], // Add FormsModule to imports
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';
 

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  onLogin() {
    this.appointmentService.login(this.email, this.password).subscribe(
      response => {
        if (response.role === 'admin') {
          this.router.navigate(['/doctors']);  
        } else if (response.role === 'user') {
          this.router.navigate(['/stafinfo']);  
        } else {
          alert('Unknown role: ' + response.role);
        }
      },
      (error) => {
        alert('Login Failed: ' + error.error.message);
        console.error('Error:', error);
      }
    );
  }
}
