import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-visitors',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-visitors.component.html',
  styleUrl: './add-visitors.component.css'
})
export class AddVisitorsComponent {
  constructor(private appointmentService: AppointmentService){}

  Name: string = '';
  Date: string = '';
  Time: string = '';
  Status: string = '';
 

  
  visitors(): void{
    
    
  
    const visitorData ={
      Name: this.Name,
      Date: this.Date,
      Time: this.Time,
      Status: this.Status
    }
    this.appointmentService.addVisitor(visitorData).subscribe(
      (response: any) => {
        console.log('Adding successful:', response);
        this.clearForm();
      },
      (error: any) => {
        console.error('Error registering appointment:', error);
        alert('Error registering appointment. Please try again.');
      }
    );
  }
  
  clearForm(){
    this.Name = '';
    this.Date='';
    this.Time='';
    this.Status='';

  } 
  
}

