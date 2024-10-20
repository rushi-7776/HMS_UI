import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddAppoitmentComponent } from './Appoitment/add-appoitment/add-appoitment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddAppoitmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
