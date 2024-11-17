import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://127.0.0.1:5000/post_data'; 
  private apiUrlGet = 'http://127.0.0.1:5000/get_data';

  constructor(private http: HttpClient) {}

  registerAppointment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); 
  }
   
   getAppointments(): Observable<any> {
    return this.http.get<any>(this.apiUrlGet); 
  }

}
