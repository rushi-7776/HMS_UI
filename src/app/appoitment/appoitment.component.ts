import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appoitment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './appoitment.component.html',
  styleUrls: ['./appoitment.component.css'],
})
export class AppoitmentComponent {
encodeURIComponent(arg0: string): any|string {
throw new Error('Method not implemented.');
}
// Define your appointment data here
appointment = [
  { specialty: 'Neurologist', doctor: 'Dr.Anka Arora', time: '10:00 AM', image: 'spec1.jpeg' },
  { specialty: 'Oncologist', doctor: 'Dr.Vinay Vyas', time: '1:00 PM', image: 'spec2.jpeg' },
  { specialty: 'Dermatologist', doctor: 'Dr.Neha Taygi', time: '11:00 PM', image: 'specl3.jpeg' },
  { specialty: 'Cardiologist', doctor: 'Dr.Leene s', time: '11:30 PM', image: 'spec4.jpeg' },
  { specialty: 'Radiologist', doctor: 'Dr.Adarsh KS', time: '3:00 PM', image: 'spec5.jpeg' },
  { specialty: 'Pediatrician', doctor: 'Dr.Ravi jangamani', time: '1:00 PM', image: 'spec6.jpeg' },
  // Add more slots as needed
];
  }

  

