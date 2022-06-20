import { TestBed } from '@angular/core/testing';

import { CalculatemonthlypremiumService } from './calculatemonthlypremium.service';

describe('CalculatemonthlypremiumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatemonthlypremiumService = TestBed.get(CalculatemonthlypremiumService);
    expect(service).toBeTruthy();
  });
});
