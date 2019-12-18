import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {BrainyQuote} from '../brainy-quotes/brainy-quotes';
import {BrainyQuotesService} from '../brainy-quotes/brainy-quotes.service';

@Component({
  selector: 'app-big-brainy-quote',
  templateUrl: './big-brainy-quote.component.html',
  styleUrls: ['./big-brainy-quote.component.scss']
})
export class BigBrainyQuoteComponent implements OnInit {

  brainyQuotes$: Observable<BrainyQuote[]>;

  constructor(private brainyQuotesService: BrainyQuotesService ) { }

  ngOnInit() {
    this.brainyQuotes$ = of(this.brainyQuotesService.allBrainyQuotes());
  }

}
