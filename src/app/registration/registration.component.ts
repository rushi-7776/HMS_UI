import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] 
})
export class RegistrationComponent implements OnInit {
  doctor: string | null = '';
  dates: string | null = '';
  appointment_time: string | null = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNo: string = '';
  address: string = '';
  formSubmitted : boolean = false;
  firstName_error : string='';
  lastName_error : string='';
  email_error : string='';
  phoneno_error : string = '';
  address_error : string= '';
  appointments :any[] = [];

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService,private router:Router) {}
  

 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.doctor = params.get('doctor') || '';
      this.appointment_time = params.get('time') || '';
    });
  }

  register(): void {
   
    this.formSubmitted = true;
      if(!this.isFormValid()){
      return;
    }

    const registrationData = {
      doctor: this.doctor,
      dates: this.dates,
      time: this.appointment_time,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNo: this.phoneNo,
      address: this.address
    };

    this.appointmentService.registerAppointment(registrationData).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        alert(`Appointment registered with ${this.doctor} on ${this.dates} at ${this.appointment_time}`);
        this.clearForm();
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error registering appointment:', error);
        alert('Error registering appointment. Please try again.');
      }
    );
  }


  
  validate_firstname(){
    var is_valid_firstname = false;
    if(this.firstName.length == 0){
    this.firstName_error = "Enter first name"
      
    }else if(this.firstName.length  < 2){
      this.firstName_error = "Enter at least two characters";

    }else if(this.firstName.length > 30){
      this.firstName_error = "Enter less than 30 characters";
      
    }else{
      this.firstName_error="";
      is_valid_firstname = true;
    }
    return is_valid_firstname;
  }

  validate_lastname(){
    var is_valid_lastname = false;
    if(this.lastName.length == 0){
    this.lastName_error = "Enter last name";
    
  }else if(this.lastName.length < 2){
    this.lastName_error="enter atleast 2 characters";

  }else if(this.lastName.length > 30){
    this.lastName_error = "Enter less than 30 characters";
    
  }else{
    this.lastName_error="";
    is_valid_lastname = true;
  }
  return is_valid_lastname;
  }

  validate_email(){
    var is_valid_email = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if(this.email.length == 0){
    this.email_error = "Enter email";
    

  }else if(this.email.length < 2){
    this.email_error="enter atleast 2 characters";
    

  }else if(this.email.length > 30){
    this.email_error = "Enter less than 30 characters";
    
    
  }else if(!emailPattern.test(this.email)){
    this.email_error = "Enter a valid email ending with @gmail.com";
    
    
  }else{
    this.email_error="";
    is_valid_email= true;
  }
  return is_valid_email;
  }
  validate_phoneno(): boolean {
    let is_valid_phoneno = false;
    if (this.phoneNo.trim().length === 0) {
      this.phoneno_error = "Please enter a phone number.";
    } else if (!/^\d+$/.test(this.phoneNo)) {
      this.phoneno_error = "Only numbers are allowed in the phone number.";
    } else if (this.phoneNo.length < 10) {
      this.phoneno_error = "Please enter at only 10 digits.";
    }else if (this.phoneNo.length > 10) {
      this.phoneno_error = "Please enter at only 10 digits.";
    }else {
      this.phoneno_error = "";
      is_valid_phoneno = true; 
    }
    return is_valid_phoneno;
  }
  validate_address(){
    var is_valid_address= false;
    if(this.address.length==0 )
      {
        this.address_error="please enter address.";
      }
      else if(this.address.length < 4)
      {
        this.address_error="please enter at least 4 characters.";
      }
      else if (this.address.length > 50){
        this.address_error="please enter less than 50 characters.";
      }
      else{
        this.address_error="";
        is_valid_address = true;
      }
      return is_valid_address;
  }

  on_submit_button_click(){
    var isvalidatefirstname = this.validate_firstname();
    var isvalidatelastname = this.validate_lastname();
    var isvalidateemail = this.validate_email();
    var isvalidatephoneno = this.validate_phoneno();
    var isvalidateaddress = this.validate_address();
    this.dates;
   
    if( isvalidatefirstname && isvalidatelastname && isvalidateemail && isvalidatephoneno && isvalidateaddress && this.dates){
         alert('all conditions pass')
    }else{
      alert('all condition not pass')
    }
  }
  clearForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNo = '';
    this.address = '';
    this.dates = '';
    this.formSubmitted = false;

    // Reset error messages
    this.firstName_error = '';
    this.lastName_error = '';
    this.email_error = '';
    this.phoneno_error = '';
    this.address_error = '';
  }

  private isFormValid(): boolean {
    return !!(this.firstName && this.lastName && this.email && this.phoneNo && this.address && this.dates);
  }
}
