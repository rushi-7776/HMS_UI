import { Component, OnInit } from '@angular/core';
import { AddStaffComponent } from "../add-staff/add-staff.component";
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment.service';
import { DailyStaffComponent } from "../daily-staff/daily-staff.component";

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [AddStaffComponent, CommonModule, DailyStaffComponent],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent implements OnInit {
  staffs: any[] = [];
  constructor(private appointmentService:AppointmentService){}

  ngOnInit(): void {
    this.fetchAppointments();
  }
  fetchAppointments(): void {
    this.appointmentService.getStaff().subscribe((data) => {
      this.staffs = data; 
    },
    (error) => {
      console.error('Error fetching appointments:', error);
    });

  }

}
