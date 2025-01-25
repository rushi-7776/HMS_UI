import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStaffComponent } from './daily-staff.component';

describe('DailyStaffComponent', () => {
  let component: DailyStaffComponent;
  let fixture: ComponentFixture<DailyStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
