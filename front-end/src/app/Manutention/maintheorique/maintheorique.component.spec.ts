import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintheoriqueComponent } from './maintheorique.component';

describe('MaintheoriqueComponent', () => {
  let component: MaintheoriqueComponent;
  let fixture: ComponentFixture<MaintheoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintheoriqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintheoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
