import { TestBed } from '@angular/core/testing';

import { InsuranceMockDataService } from './insurance-mock-data.service';

describe('InsuranceMockDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsuranceMockDataService = TestBed.get(InsuranceMockDataService);
    expect(service).toBeTruthy();
  });
});
