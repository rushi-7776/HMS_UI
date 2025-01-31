import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
  private regapiUrl = 'http://localhost:5000/register'; 
  private staffUrl = 'http://127.0.0.1:5000/staffs';
  private visitorUrl = 'http://127.0.0.1:5000/visitors';
  // private apiUrlLogin = 'http://127.0.0.1:5000/login';
  private apiUrlPost = 'http://127.0.0.1:5000/Appointment';  
  private apiUrlGet = 'http://127.0.0.1:5000/appointments';   
  private apiUrlGetToday = 'http://127.0.0.1:5000/Todayappointments';   

  private staffregisterUrl = 'http://127.0.0.1:5000/staffregister';
  constructor(private http: HttpClient) {}

 

  staffregister(users: { name: string; mobile: string; dates: string; times: string; position: string }): Observable<any> {
    return this.http.post(`${this.staffregisterUrl}`, users); 
  }

  getStaff(): Observable<any> {
    return this.http.get<any>(this.staffUrl);
  }
  

  getVisitors(): Observable<any> {
    return this.http.get<any>(this.visitorUrl);
  }

  addVisitor(data: any): Observable<any> {
    return this.http.post(this.visitorUrl, data);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/login', { email, password });
  }
  

  register(user: { email: string, password: string ,role:string}): Observable<any> {
    return this.http.post(`${this.regapiUrl}`, user); 
  }

  registerAppointment(data: any): Observable<any> {
    return this.http.post(this.apiUrlPost, data);  
  }

  getAppointments(): Observable<any> {
    return this.http.get<any>(this.apiUrlGet); 
  }

  getTodayAppointments(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetToday); 
  }
}
