import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment.service';
import { VisitorsComponent } from "../visitors/visitors.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, VisitorsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  patients: any[] = [];
  todayDate: string;
  constructor(private appointmentService: AppointmentService) {
    
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this.todayDate = today.toLocaleDateString('en-US',options);
  }

  showAppointments = false;
  openAppointmentsModal() {
    this.showAppointments = true;
  }

  showDoctors = false;
  openDoctorsModal() {
    this.showDoctors = true;
  }

  logout(): void {
    this.appointmentService.logout();
  }

  daily_staffs: any[] = [];

  ngOnInit(): void {
    this.fetchStaff();
    this.fetchPatients();
  }
  fetchStaff(): void {
    this.appointmentService.dailyGetStaff().subscribe((data) => {
      this.daily_staffs = data;
       
    },
    (error) => {
      console.error('Error fetching appointments:', error);
    });

  }
  fetchPatients(): void {
    this.appointmentService.getPatients().subscribe((data) => {
      this.patients = data; 
    },
    (error) => {
      console.error('Error fetching appointments:', error);
    });

  }

}