import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrainyQuotesContainerComponent} from './brainy-quotes/brainy-quotes-container.component';
import {BigBrainyQuoteComponent} from './big-brainy-quote/big-brainy-quote.component';
import {SmallBrainyQuoteComponent} from './small-brainy-quote/small-brainy-quote.component';


const routes: Routes = [
  { path: 'brainy-quotes', component: BrainyQuotesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [BigBrainyQuoteComponent, SmallBrainyQuoteComponent]
})
export class AppRoutingModule { }
