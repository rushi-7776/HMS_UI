import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { FormsModule } from '@angular/forms'; // Removed ReactiveFormsModule as it's not needed
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule], // Keep only FormsModule here
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  doctor: string | null = '';
  date: string | null = '';
  time: string | null = '';
  firstname: string = '';
  firstName_error: string = '';
  lastname: string = '';
  lastName_error: string = '';
  email: string = '';
  email_error: string = '';
  phoneno: string = '';
  phoneno_error: string = '';
  address: string = '';
  address_error: string = '';
  appointments: any[] = []; // Store the list of appointments
  formSubmitted: boolean = false;

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.doctor = params.get('doctor') || '';
      // this.date = params.get('date') || '';
      this.time = params.get('time') || '';
    });
  }

  register(): void {
    this.formSubmitted = true;

    if (!this.isFormValid()) {
      return;
    }

    const registrationData = {
      doctor: this.doctor,
      dates: this.date,
      time: this.time,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phoneno: this.phoneno,
      address: this.address
    };

    this.appointmentService.registerAppointment(registrationData).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        alert(`Appointment registered with ${this.doctor} on ${this.date} at ${this.time}`);
        this.appointmentService.getAppointments().subscribe(
          (appointments) => {
            this.appointments = appointments;
          },
          (error) => {
            console.error('Error fetching appointments:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error registering appointment:', error);
        alert('Error registering appointment. Please try again.');
      }
    );
  }

  // Validation functions
  validat_firstname(): boolean {
    let is_valid_firstname = false;
    if (this.firstname.length == 0) {
      this.firstName_error = "Please enter first name.";
    } else if (this.firstname.length < 2) {
      this.firstName_error = "First name must be at least 2 characters.";
    } else if (this.firstname.length > 10) {
      this.firstName_error = "First name must be a maximum of 10 characters.";
    } else {
      this.firstName_error = "";
      is_valid_firstname = true;
    }
    return is_valid_firstname;
  }

  validat_lastname(): boolean {
    let is_valid_lastname = false;
    if (this.lastname.length == 0) {
      this.lastName_error = "Please enter last name.";
    } else if (this.lastname.length < 2) {
      this.lastName_error = "Last name must be at least 2 characters.";
    } else if (this.lastname.length > 25) {
      this.lastName_error = "Last name must be a maximum of 25 characters.";
    } else {
      this.lastName_error = "";
      is_valid_lastname = true;
    }
    return is_valid_lastname;
  }

  validat_email(): boolean {
    let is_valid_email = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (this.email.length == 0) {
      this.email_error = "Please enter email.";
    } else if (this.email.length < 2) {
      this.email_error = "Email must be at least 2 characters.";
    } else if (this.email.length > 25) {
      this.email_error = "Email must be a maximum of 25 characters.";
    } else if (!emailPattern.test(this.email)) {
      this.email_error = "Enter a valid email ending with @gmail.com";
    } else {
      this.email_error = "";
      is_valid_email = true;
    }
    return is_valid_email;
  }

  validat_phoneno(): boolean {
    let is_valid_phoneno = false;
    if (this.phoneno.trim().length === 0) {
      this.phoneno_error = "Please enter phone number.";
    } else if (!/^\d+$/.test(this.phoneno)) {
      this.phoneno_error = "Only numbers are allowed in the phone number.";
    } else if (this.phoneno.length < 10) {
      this.phoneno_error = "Phone number must be at least 10 digits.";
    } else if (this.phoneno.length > 12) {
      this.phoneno_error = "Phone number must be a maximum of 12 digits.";
    } else {
      this.phoneno_error = "";
      is_valid_phoneno = true;
    }
    return is_valid_phoneno;
  }

  validat_address(): boolean {
    let is_valid_address = false;
    if (this.address.length == 0) {
      this.address_error = "Please enter address.";
    } else if (this.address.length < 2) {
      this.address_error = "Address must be at least 2 characters.";
    } else if (this.address.length > 25) {
      this.address_error = "Address must be a maximum of 25 characters.";
    } else {
      this.address_error = "";
      is_valid_address = true;
    }
    return is_valid_address;
  }

  // This function is called when the submit button is clicked
  on_submit_button_click(): void {
    const isValidFirstName = this.validat_firstname();
    const isValidLastName = this.validat_lastname();
    const isValidEmail = this.validat_email();
    const isValidPhoneNo = this.validat_phoneno();
    const isValidAddress = this.validat_address();

    if (isValidFirstName && isValidLastName && isValidEmail && isValidPhoneNo && isValidAddress) {
      alert("All validations passed. Proceeding to registration...");
      this.register(); // Call the registration function if all validations pass
    } else {
      console.log("Please fix the errors in the form.");
    }
  }

  // Check if the form is valid (all fields must pass validation)
  private isFormValid(): boolean {
    return this.validat_firstname() && this.validat_lastname() && this.validat_email() && this.validat_phoneno() && this.validat_address();
  }
}
