import { Component } from '@angular/core';

import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  email: string = '';
  password: string = '';
  role: string = 'user';

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  register() {
    const user = { email: this.email, password: this.password, role: this.role};
    this.appointmentService.register(user).subscribe(response => {
      alert('Registration successful!');
      this.router.navigate(['/doctor-login']);
    }, error => {
      alert('Registration failed!');
    });
 }
}
