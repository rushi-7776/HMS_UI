import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.css'
})
export class AddStaffComponent {
  name: string = '';
  mobile: string = '';
  date: string='' ;
  todayDate: string = '';
  position: string = '';

  constructor(private appointmentService:AppointmentService){}
  

  add_staff(): void {
   
    const addStaff = {
      name: this.name,
      mobile: this.mobile,
      date: this.date,
      todayDate: this.todayDate,
      position: this.position,
  
    };

    this.appointmentService.addStaff(addStaff).subscribe(
      (response: any) => {
        console.log('Add Patient Successful:', response);
        
        this.clearForm();
      },
      (error: any) => {
        console.error('Error registering appointment:', error);
        alert('Error registering appointment. Please try again.');
      }
    );
  }
  clearForm(){
    this.name  = '';
    this.mobile = '';
    this.date = '';
    this.todayDate = '';
    this.position = '';
  }

}
