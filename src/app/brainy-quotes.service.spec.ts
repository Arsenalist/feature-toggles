import { TestBed } from '@angular/core/testing';

import { BrainyQuotesService } from './brainy-quotes.service';

describe('BrainyQuotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrainyQuotesService = TestBed.get(BrainyQuotesService);
    expect(service).toBeTruthy();
  });
});
