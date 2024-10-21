import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
//import { routes } from '../../app.routes';  // Correct path



@Component({
  selector: 'app-add-appoitment',
  standalone: true,  // Mark the component as standalone
  templateUrl: './add-appoitment.component.html',
  styleUrls: ['./add-appoitment.component.css'],
  imports: [RouterModule]  // Import RouterModule here
})
export class AddAppoitmentComponent { }
