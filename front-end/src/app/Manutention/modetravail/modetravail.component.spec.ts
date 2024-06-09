import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModetravailComponent } from './modetravail.component';

describe('ModetravailComponent', () => {
  let component: ModetravailComponent;
  let fixture: ComponentFixture<ModetravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModetravailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModetravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
