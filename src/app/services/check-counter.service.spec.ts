import { TestBed } from '@angular/core/testing';

import { CheckCounterService } from './check-counter.service';

describe('CheckCounterService', () => {
  let service: CheckCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
