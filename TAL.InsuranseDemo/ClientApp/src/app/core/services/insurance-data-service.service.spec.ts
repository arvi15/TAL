import { TestBed } from '@angular/core/testing';

import { InsuranceDataServiceService } from './insurance-data-service.service';

describe('InsuranceDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsuranceDataServiceService = TestBed.get(InsuranceDataServiceService);
    expect(service).toBeTruthy();
  });
});
