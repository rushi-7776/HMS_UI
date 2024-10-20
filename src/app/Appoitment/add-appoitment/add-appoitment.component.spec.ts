import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppoitmentComponent } from './add-appoitment.component';

describe('AddAppoitmentComponent', () => {
  let component: AddAppoitmentComponent;
  let fixture: ComponentFixture<AddAppoitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppoitmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppoitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
