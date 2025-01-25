import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-daily-staff',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './daily-staff.component.html',
  styleUrl: './daily-staff.component.css'
})
export class DailyStaffComponent {
    id: Number = 0;
    check_in: string = '';
 
  
    constructor(private appointmentService:AppointmentService){}
    
  
    daily_staff(): void {
     
      const dailyStaff = {
        id: this.id,
        check_in: this.check_in,
      };
  
      this.appointmentService.dailyAddStaff(dailyStaff).subscribe(
        (response: any) => {
          console.log('Add Staff Successful:', response);
          
          this.clearForm();
        },
        (error: any) => {
          console.error('Error registering appointment:', error);
          alert('Error registering appointment. Please try again.');
        }
      );
    }
    clearForm(){
      this.id  = 0;
      this.check_in = '';
    }

}
