import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://127.0.0.1:5000/appointment';
  private patientUrl = 'http://127.0.0.1:5000/appointments';
  private loginUrl = 'http://127.0.0.1:5000/login'; 
  private registerUrl = 'http://127.0.0.1:5000/register'; 
  private visitorUrl = 'http://127.0.0.1:5000/visitor'; 
  private addStaffUrl = 'http://127.0.0.1:5000/staff'; 
  private dailyStaffUrl = 'http://127.0.0.1:5000/dailystaff'; 
  
  constructor(private http: HttpClient,private router: Router) {}

  dailyAddStaff(data: any): Observable<any> {
    return this.http.post(this.dailyStaffUrl, data); 
  }
  dailyGetStaff(): Observable<any> {
    return this.http.get(this.dailyStaffUrl); 
  }

  addStaff(data: any): Observable<any> {
    return this.http.post(this.addStaffUrl, data); 
  }
  getStaff(): Observable<any> {
    return this.http.get(this.addStaffUrl); 
  }
  getPatients(): Observable<any> {
    return this.http.get(this.patientUrl); 
  }

  registerAppointment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); 
  }
  addVisitor(data: any): Observable<any> {
    return this.http.post(this.visitorUrl, data); 
  }
  getVisitors(): Observable<any> {
    return this.http.get<any>(this.visitorUrl); 
  }

   getAppointments(): Observable<any> {
    return this.http.get<any>(this.apiUrl); 
  }
  getAppointmentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  register(user: {username: string, password: string}): Observable<any> {
    return this.http.post(this.registerUrl, user)
  }

  login(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post<any>(this.loginUrl, user);
  }
  logout(): void {
    localStorage.removeItem('token'); 
    this.router.navigate(['/login']); 
  }

}
