import { Component, OnInit } from '@angular/core';
import {BrainyQuotesService} from '../brainy-quotes.service';
import {BrainyQuote} from '../brainy-quotes';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-small-brainy-quote',
  templateUrl: './small-brainy-quote.component.html',
  styleUrls: ['./small-brainy-quote.component.scss']
})
export class SmallBrainyQuoteComponent implements OnInit {

  brainyQuotes$: Observable<BrainyQuote[]>;

  constructor(private brainyQuotesService: BrainyQuotesService ) { }

  ngOnInit() {
    this.brainyQuotes$ = of(this.brainyQuotesService.allBrainyQuotes());
  }

}
