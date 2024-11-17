// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-test',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './test.component.html',
//   styleUrl: './test.component.css'
// })
// export class TestComponent {

// }
// import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-validation-form',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './validation-form.component.html',
//   styleUrls: ['./validation-form.component.css']
// })
// export class ValidationFormComponent implements AfterViewInit {

//   constructor(private renderer: Renderer2, private elRef: ElementRef) {}

//   ngAfterViewInit(): void {
//     this.applyBootstrapValidation();
//   }

//   private applyBootstrapValidation(): void {
//     // Fetch all forms with the "needs-validation" class
//     const forms: NodeListOf<HTMLFormElement> = this.elRef.nativeElement.querySelectorAll('.needs-validation');
    
//     forms.forEach((form) => {
//       this.renderer.listen(form, 'submit', (event: Event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
        
//         // Add the "was-validated" class to the form
//         this.renderer.addClass(form, 'was-validated');
//       });
//     });
//   }
// }
