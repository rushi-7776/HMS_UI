import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appoitment-list.component.html',
  styleUrls: ['./appoitment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  searchQuery: string = ''; // For storing search input
  appointments: any[] = []; // Full list of appointments
  filteredAppointments: any[] = []; // Filtered appointments after search
  pagedAppointments: any[] = []; // Appointments after pagination applied
  pageSize: number | string = 5; // Number of entries per page
  currentPage: number = 1; // Current page number
  totalPages: number = 0; // Total number of pages
  pageNumbers: number[] = []; // Page numbers for pagination

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.appointmentService.getAppointments().subscribe(
      (data) => {
        this.appointments = data;
        this.filteredAppointments = data; // Initially show all appointments
        this.calculatePagination(); // Calculate total pages and set pagedAppointments
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }

  filterAppointments(): void {
    if (!this.searchQuery.trim()) {
      this.filteredAppointments = [...this.appointments];
    } else {
      this.filteredAppointments = this.appointments.filter(appointment =>
        Object.values(appointment).some(value =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    }
    this.calculatePagination(); // Recalculate pagination after filtering
  }

  calculatePagination(): void {
    if(this.pageSize === 'all'){
      this.totalPages = 1;
      this.pageNumbers =[1];
    }else{
    this.totalPages = Math.ceil(this.filteredAppointments.length / Number (this.pageSize));
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }
    this.updatePagedAppointments();
  }

  updatePagedAppointments(): void {
    if (this.pageSize === 'all') {
      // Show all data when "all" is selected
      this.pagedAppointments = this.filteredAppointments;
    } else {
      const startIndex = (this.currentPage - 1) * Number (this.pageSize);
      const endIndex = startIndex + Number(this.pageSize);
      this.pagedAppointments = this.filteredAppointments.slice(startIndex, endIndex);
    }
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return; // Avoid invalid pages
    this.currentPage = page;
    this.updatePagedAppointments();
  }

  onPageSizeChange(): void {
    this.calculatePagination(); // Recalculate when page size changes
    this.updatePagedAppointments();
  }
}
