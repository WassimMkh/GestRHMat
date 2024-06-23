import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanderoulementComponent } from './planderoulement.component';

describe('PlanderoulementComponent', () => {
  let component: PlanderoulementComponent;
  let fixture: ComponentFixture<PlanderoulementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanderoulementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanderoulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
