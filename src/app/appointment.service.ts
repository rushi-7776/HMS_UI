import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  // Base URL for your Flask API
  private apiUrl = 'http://127.0.0.1:5000/post_data'; // Base URL
  private apiUrlGet = 'http://127.0.0.1:5000/get_data';

  constructor(private http: HttpClient) {}

  // Method to register an appointment
 // registerAppointment(data: any): Observable<any> {
 //   return this.http.post("https://jsonplaceholder.typicode.com/users", data); // Send a POST request to the Flask API
 // }
  registerAppointment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); // Send a POST request to the Flask API
  }
   // Method to get all appointments (GET)
   getAppointments(): Observable<any> {
    return this.http.get<any>(this.apiUrlGet);  // GET request for fetching 
  }

}
