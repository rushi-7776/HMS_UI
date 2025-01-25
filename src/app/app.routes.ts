  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { ServicesComponent } from './services/services.component';
  import { ContactUsComponent } from './contact-us/contact-us.component';
  import { HomeComponent } from './home/home.component';
  import { RegistrationComponent } from './registration/registration.component';
  import { AppoitmentComponent } from './appoitment/appoitment.component';
  import { DisplayComponent } from './display/display.component';
  import { AboutComponent } from './aboutus/aboutus.component';
  import { HeaderComponent } from './header/header.component';
  import { FooterComponent } from './footer/footer.component';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { LoginComponent } from './login/login.component';
  import { RegisterComponent } from './register/register.component';
  import { DoctorsComponent } from './doctors/doctors.component';
  import { VisitorsComponent } from './visitors/visitors.component';
  import { AddVisitorsComponent } from './add-visitors/add-visitors.component';
  import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { DailyStaffComponent } from './daily-staff/daily-staff.component';
  

  export const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'header', component: HeaderComponent }, 
    { path: 'footer', component:FooterComponent}, 
    { path: 'services', component: ServicesComponent },
    { path: 'appoitment', component: AppoitmentComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'register/:doctor/:time', component: RegistrationComponent},
    { path: 'display', component: DisplayComponent},
    {path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    { path: 'registerdoc', component: RegisterComponent },
    { path: 'doctors', component:DoctorsComponent },
    { path: 'visitors', component:VisitorsComponent },
    { path: 'add-visitors', component:AddVisitorsComponent },
    { path: 'staff', component: StaffComponent},
    { path: 'add-staff', component: AddStaffComponent},
    { path: 'daily-staff', component: DailyStaffComponent},
    { path: '', component: HomeComponent }, 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
  ];
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
  export class AppRoutingModule {}
  
