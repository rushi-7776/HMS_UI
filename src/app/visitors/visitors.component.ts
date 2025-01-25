import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.css'
})
export class VisitorsComponent implements OnInit {

  filteredAppointments: any[] = [];
  appointments: any[] = [];
  searchQuery: string='';
  page: number = 1;
  itemsPerPage: number = 3;
  paginatedAppointments : any[] = [];

  constructor(private appointmentService: AppointmentService){}

 

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.appointmentService.getVisitors().subscribe(
      (data) => {
        this.appointments = data;
        this.filteredAppointments = [...this.appointments];
        this.updatePagination();
        console.log('Fetched appointments:', this.appointments);
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
  filterAppointments(): void {
    if(!this.searchQuery.trim()) {
      this.filteredAppointments = [...this.appointments];  
    } else {
      this.filteredAppointments = this.appointments.filter(appointment =>
        Object.values(appointment).some(value =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    }
    this.page = 1;
    this.updatePagination();
  }


  updatePagination(): void {
    if (this.itemsPerPage === 0) {
    
      this.paginatedAppointments = [...this.filteredAppointments];
    } else {

      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedAppointments = this.filteredAppointments.slice(startIndex, endIndex);
    }
  }
  get totalPages(): number {
    return this.itemsPerPage === 0 ? 1 : Math.ceil(this.filteredAppointments.length / this.itemsPerPage);
  }
  
  previousPage(): void{
    if(this.page > 1){
      this.page--;
      this.updatePagination();
    }
  }
  nextPage(): void{
    if (this.page < this.totalPages){
      this.page++;
      this.updatePagination();
    }
  }
  
  onPageSizeChange(): void {
    this.page = 1;
    this.updatePagination(); 
   
  }
}
