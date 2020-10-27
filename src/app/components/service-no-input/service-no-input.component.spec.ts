import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNoInputComponent } from './service-no-input.component';

describe('ServiceNoInputComponent', () => {
  let component: ServiceNoInputComponent;
  let fixture: ComponentFixture<ServiceNoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceNoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
