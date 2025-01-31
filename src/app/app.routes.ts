import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppoitmentComponent } from './appoitment/appoitment.component';
import { AppointmentListComponent } from './appoitment-list/appoitment-list.component';
import { HeaderComponent } from './header/header.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff.component';
import { StaffregisterComponent } from './staffregister/staffregister.component';
import { StafinfoComponent } from './stafinfo/stafinfo.component';

export const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'appoitment', component: AppoitmentComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'register/:doctor/:date/:time', component: RegistrationComponent },
  { path: 'appoitment-list', component: AppointmentListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default redirect to /home
  { path: 'doctor-login',component: DoctorLoginComponent},
  { path: 'doctors', component: DoctorsComponent },
  { path: 'registers', component:RegisterComponent},
  { path: 'staff', component:StaffComponent},
  { path: 'staffregister', component:StaffregisterComponent},
  { path: 'stafinfo', component:StafinfoComponent},
  { path: '**', redirectTo: '/home' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
