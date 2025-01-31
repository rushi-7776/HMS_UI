import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoitmentComponent } from './appoitment.component';
import { beforeEach, describe, it } from 'node:test';

describe('AppoitmentComponent', () => {
  let component: AppoitmentComponent;
  let fixture: ComponentFixture<AppoitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoitmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
function expect(component: AppoitmentComponent) {
  throw new Error('Function not implemented.');
}

