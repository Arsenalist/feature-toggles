import { TestBed } from '@angular/core/testing';

import { BrainyQuotesService } from './brainy-quotes.service';

describe('BrainyQuotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrainyQuotesService = TestBed.get(BrainyQuotesService);
    expect(service).toBeTruthy();
  });

  it('should return three quotes', () => {
    const service: BrainyQuotesService = TestBed.get(BrainyQuotesService);
    const brainyQuotes = service.allBrainyQuotes();
    expect(brainyQuotes.length).toEqual(3);
    expect(brainyQuotes[2].author).toEqual('Plato');
  });

});
