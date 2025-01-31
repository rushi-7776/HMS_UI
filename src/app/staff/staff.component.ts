import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs: any[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.appointmentService.getStaff().subscribe(
        (data) => {
            this.staffs = data.active_staff;  
        },
        (error) => {
            console.error('Error fetching appointments:', error.message, error.status, error);
            alert('Failed to fetch staff. Check server or network.');
        }
    );
}

}
