import { Component } from '@angular/core';
import { StaffregisterComponent } from "../staffregister/staffregister.component";

@Component({
  selector: 'app-stafinfo',
  standalone: true,
  imports: [StaffregisterComponent],
  templateUrl: './stafinfo.component.html',
  styleUrl: './stafinfo.component.css'
})
export class StafinfoComponent {
  todayDate: string;

  constructor() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this.todayDate = today.toLocaleDateString('en-US', options);
  }
}
