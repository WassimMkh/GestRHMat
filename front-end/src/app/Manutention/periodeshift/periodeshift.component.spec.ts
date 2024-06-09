import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeshiftComponent } from './periodeshift.component';

describe('PeriodeshiftComponent', () => {
  let component: PeriodeshiftComponent;
  let fixture: ComponentFixture<PeriodeshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodeshiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodeshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
