  import { NgModule } from '@angular/core';
  import { RouterModule, RouterOutlet, Routes } from '@angular/router';
  import { ServicesComponent } from './services/services.component';
  import { ContactUsComponent } from './contact-us/contact-us.component';
  import { AboutusComponent } from './aboutus/aboutus.component';
  import { HomeComponent } from './home/home.component';
  import { RegistrationComponent } from './registration/registration.component';
  import { AppoitmentComponent } from './appoitment/appoitment.component';
  import { BrowserModule } from '@angular/platform-browser';



  export const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'appoitment', component: AppoitmentComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'register/:doctor/:date/:time', component: RegistrationComponent},
   
    { path: '', component: HomeComponent }, 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
  ];
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
  export class AppRoutingModule {}
  
