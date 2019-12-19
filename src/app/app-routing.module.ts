import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrainyQuotesContainerComponent} from './brainy-quotes/brainy-quotes-container/brainy-quotes-container.component';
import {BigBrainyQuoteComponent} from './brainy-quotes/big-brainy-quote/big-brainy-quote.component';
import {SmallBrainyQuoteComponent} from './brainy-quotes/small-brainy-quote/small-brainy-quote.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';


const routes: Routes = [
  { path: 'brainy-quotes', component: BrainyQuotesContainerComponent },
  { path: 'movies', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [BigBrainyQuoteComponent, SmallBrainyQuoteComponent]
})
export class AppRoutingModule { }
