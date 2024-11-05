import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  // Base URL for your Flask API
  private apiUrl = 'http://localhost:5000'; // Base URL

  constructor(private http: HttpClient) {}

  // Method to register an appointment
  registerAppointment(data: any): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/users", data); // Send a POST request to the Flask API
  }

}
