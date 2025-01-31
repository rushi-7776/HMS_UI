import { Component, OnInit } from '@angular/core';
import { AppointmentListComponent } from "../appoitment-list/appoitment-list.component";
import { CommonModule } from '@angular/common';
import { VisitorpageComponent } from "../visitorpage/visitorpage.component";
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [AppointmentListComponent, CommonModule, VisitorpageComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {
  todayDate: string;
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this.todayDate = today.toLocaleDateString('en-US', options);
  }
  showAppointments = false;

  openAppointmentsModal() {
    this.showAppointments = true; // Show the component when the modal is triggered
  }
  allDoctors: string[] = [
    'Dr. Ravi Jangamani',
    'Dr. Jane Smith',
    'Dr. Michael Lee',
    'Dr. Susan Taylor',
    'Dr. John Doe',
    'Dr. Emily Davis',
    'Dr. William Brown',
    'Dr. Alice Cooper',
    'Dr. Robert Johnson',
    'Dr. Karen White'
  ];

  selectedDoctors: string[] = [];
  isDoctorSelectionVisible: boolean = false;

  openDoctorSelection() {
    this.isDoctorSelectionVisible = true;
  }

  closeDoctorSelection() {
    this.isDoctorSelectionVisible = false;
  }

  selectDoctor(doctor: string) {
    if (!this.selectedDoctors.includes(doctor)) {
      this.selectedDoctors.push(doctor);
    }
  }
staffs: any[] = [];


  ngOnInit(): void {
    this.fetchAppointments();
    this.todayAppointments();
  }

  fetchAppointments(): void {
    this.appointmentService.getStaff().subscribe(
      (data) => {
        // Assuming the data is structured as { active_staff: [...] }
        this.staffs = data.active_staff;  
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
  todayAppointments(): void {
    this.appointmentService.getTodayAppointments().subscribe(
      (data) => {
        // Assuming the data is structured as { active_staff: [...] }
        this.appointments = data;  
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}

