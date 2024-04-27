import { TestBed } from '@angular/core/testing';

import { CouresServiceService } from './coures.service.service';

describe('CouresServiceService', () => {
  let service: CouresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
