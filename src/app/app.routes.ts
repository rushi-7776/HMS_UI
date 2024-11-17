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




  export const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'header', component: HeaderComponent }, 
    { path: 'footer', component:FooterComponent}, 
    { path: 'services', component: ServicesComponent },
    { path: 'appoitment', component: AppoitmentComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'register/:doctor/:date/:time', component: RegistrationComponent},
    { path: 'display', component: DisplayComponent},
  
    { path: '', component: HomeComponent }, 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
  ];
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
  export class AppRoutingModule {}
  
