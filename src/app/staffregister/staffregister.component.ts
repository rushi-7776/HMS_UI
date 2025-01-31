import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staffregister',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staffregister.component.html',
  styleUrls: ['./staffregister.component.css'],
})
export class StaffregisterComponent {
  name: string = '';
  mobile: string = '';
  dates: string = '';
  times: string = '';
  position: string = '';

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  register() {
   
    const formattedDate = new Date(this.dates).toISOString().split('T')[0];
    const formattedTime = `${this.times}:00`;

    const users = {
      name: this.name,
      mobile: this.mobile,
      dates: formattedDate,
      times: formattedTime, 
      position: this.position,
    };
  
    this.appointmentService.staffregister(users).subscribe(
      (response) => {
        console.log('Success:', response);
        alert('Registration successful!');
        this.router.navigate(['/success']);
      },
      (error) => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}  