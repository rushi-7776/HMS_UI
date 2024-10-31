import { Component, inject, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  doctor: string | null = '';
  date: string | null = '';
  time: string | null = '';
  firstName:String  | null = '';
  lastName:String  | null = '';
  email:string  | null = '';
  PhoneNo: string  | null = '';
  address:string  | null = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.doctor = params.get('doctor') || '';
      this.date = params.get('date') || '';
      this.time = params.get('time') || '';
    });
  }
  register() 
  {
    // Implement registration logic here
    console.log(`Registering appointment with ${this.doctor} on ${this.date} at ${this.time}`);
    alert(`Appointment registered with ${this.doctor} on ${this.date} at ${this.time}`);
  }
}
    
