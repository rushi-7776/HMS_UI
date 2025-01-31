import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafinfoComponent } from './stafinfo.component';

describe('StafinfoComponent', () => {
  let component: StafinfoComponent;
  let fixture: ComponentFixture<StafinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StafinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
