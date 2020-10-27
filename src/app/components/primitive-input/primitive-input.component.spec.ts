import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveInputComponent } from './primitive-input.component';

describe('PrimitiveInputComponent', () => {
  let component: PrimitiveInputComponent;
  let fixture: ComponentFixture<PrimitiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimitiveInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
