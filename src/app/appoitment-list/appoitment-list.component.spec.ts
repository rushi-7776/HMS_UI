import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListComponent } from './appoitment-list.component';
import { beforeEach, describe, it } from 'node:test';

describe('AppoitmentListComponent', () => {
  let component: AppointmentListComponent;
  let fixture: ComponentFixture<AppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  //   expect(component).toBeTruthy();
   });
});
