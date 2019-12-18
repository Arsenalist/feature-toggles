import { Injectable } from '@angular/core';
import {BRAINY_QUOTES, BrainyQuote} from './brainy-quotes';

@Injectable({
  providedIn: 'root'
})
export class BrainyQuotesService {

  constructor() { }

  public allBrainyQuotes(): BrainyQuote[] {
    return BRAINY_QUOTES;
  }
}
