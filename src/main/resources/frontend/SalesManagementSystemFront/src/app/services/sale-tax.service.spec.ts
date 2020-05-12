import {TestBed} from '@angular/core/testing';

import {SaleTaxService} from './sale-tax.service';

describe('SaleTaxService', () => {
  let service: SaleTaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleTaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
