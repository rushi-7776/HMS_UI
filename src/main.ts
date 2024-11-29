import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path if needed
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Adjusted path
import { provideHttpClient } from '@angular/common/http';
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) ,provideHttpClient()// Use provideRouter to set up routing
  ]
}).catch(err => console.error(err));
