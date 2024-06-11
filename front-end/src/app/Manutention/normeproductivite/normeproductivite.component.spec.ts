import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormeproductiviteComponent } from './normeproductivite.component';

describe('NormeproductiviteComponent', () => {
  let component: NormeproductiviteComponent;
  let fixture: ComponentFixture<NormeproductiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormeproductiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormeproductiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
