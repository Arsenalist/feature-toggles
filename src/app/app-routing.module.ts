import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrainyQuotesContainerComponent} from './brainy-quotes/brainy-quotes-container/brainy-quotes-container.component';
import {BigBrainyQuoteComponent} from './brainy-quotes/big-brainy-quote/big-brainy-quote.component';
import {SmallBrainyQuoteComponent} from './brainy-quotes/small-brainy-quote/small-brainy-quote.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';
import {StockPricesComponent} from './stocks/stock-prices/stock-prices.component';
import {CanActivateStockPrices} from './stocks/can-activate-stock-prices';
import {NbaScoresComponent} from './scores/nba-scores/nba-scores.component';


const routes: Routes = [
  { path: 'brainy-quotes', component: BrainyQuotesContainerComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'nba-scores', component: NbaScoresComponent },
  {
    path: 'stock-prices',
    component: StockPricesComponent,
    canActivate: [CanActivateStockPrices],
    data: {featureName: 'viewingStockPricesEnabled'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [BigBrainyQuoteComponent, SmallBrainyQuoteComponent],
  providers: [CanActivateStockPrices]
})
export class AppRoutingModule { }
