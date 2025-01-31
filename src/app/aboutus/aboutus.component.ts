import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {
  constructor(private appointmentService: AppointmentService) {}

  Name: string = '';
  Date: string = '';
  Time: string = '';

  onSubmit(): void {
    const visitorData = {
      Name: this.Name,
      Date: this.Date,
      Time: this.Time,
    };

    if (this.Name && this.Date && this.Time) {
      this.appointmentService.addVisitor(visitorData).subscribe(
        (response: any) => {
          console.log('Adding successful:', response);
          this.clearForm();
        },
        (error: any) => {
          console.error('Error registering appointment:', error);
          alert('Error registering appointment. Please try again.');
        }
      );
    } 
    else {
      alert('Please fill in all required fields.');
    }
  }

  clearForm(): void {
    this.Name = '';
    this.Date = '';
    this.Time = '';
  }
}
