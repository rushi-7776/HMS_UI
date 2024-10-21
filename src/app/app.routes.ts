import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppoitmentComponent } from './Appoitment/add-appoitment/add-appoitment.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
  { path: 'add-appointment', component: AddAppoitmentComponent},
  // Add other routes here
  { path: 'appointment', component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
