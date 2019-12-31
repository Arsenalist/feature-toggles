import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrainyQuotesContainerComponent } from './brainy-quotes/brainy-quotes-container/brainy-quotes-container.component';
import { TogglePointDirective } from './brainy-quotes/toggle-point.directive';
import { BigBrainyQuoteComponent } from './brainy-quotes/big-brainy-quote/big-brainy-quote.component';
import { SmallBrainyQuoteComponent } from './brainy-quotes/small-brainy-quote/small-brainy-quote.component';
import { FeatureToggleDirective } from './movies/feature-toggle.directive';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { StockPricesComponent } from './stocks/stock-prices/stock-prices.component';
import { NbaScoresComponent } from './scores/nba-scores/nba-scores.component';
import { BookListingComponent } from './bookstore/book-listing/book-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    BrainyQuotesContainerComponent,
    TogglePointDirective,
    BigBrainyQuoteComponent,
    SmallBrainyQuoteComponent,
    FeatureToggleDirective,
    MovieListComponent,
    StockPricesComponent,
    NbaScoresComponent,
    BookListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
