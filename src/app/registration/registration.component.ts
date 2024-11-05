import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] // Fix 'styleUrl' to 'styleUrls'
})
export class RegistrationComponent implements OnInit {
  doctor: string | null = '';
  date: string | null = '';
  time: string | null = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  PhoneNo: string = '';
  address: string | null = '';

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.doctor = params.get('doctor') || '';
      this.date = params.get('date') || '';
      this.time = params.get('time') || '';
    });
  }

  register() {
    const registrationData = {
      doctor: this.doctor,
      date: this.date,
      time: this.time,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      PhoneNo: this.PhoneNo,
      address: this.address
    };

    this.appointmentService.registerAppointment(registrationData).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        alert(`Appointment registered with ${this.doctor} on ${this.date} at ${this.time}`);
      },
      (error: any) => {
        console.error('Error registering appointment:', error);
        alert('Error registering appointment. Please try again.');
      }
    );
  }
}
