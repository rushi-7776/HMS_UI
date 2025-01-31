import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsComponent } from './doctors.component';
import { describe, beforeEach, it } from 'node:test';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
