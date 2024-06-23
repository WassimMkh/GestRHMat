import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutentionComponent } from './manutention.component';

describe('ManutentionComponent', () => {
  let component: ManutentionComponent;
  let fixture: ComponentFixture<ManutentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
