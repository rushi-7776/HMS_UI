import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://your-api-url/api/appointments'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  registerAppointment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
