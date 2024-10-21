import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Fixed typo in the component name and path
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', component: HomeComponent }, 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterOutlet],
  exports: [RouterModule],
})
export class AppRoutingModule {}
