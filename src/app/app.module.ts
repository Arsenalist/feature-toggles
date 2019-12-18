import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrainyQuotesContainerComponent } from './brainy-quotes/brainy-quotes-container/brainy-quotes-container.component';
import { TogglePointDirective } from './toggle-point.directive';
import { BigBrainyQuoteComponent } from './big-brainy-quote/big-brainy-quote.component';
import { SmallBrainyQuoteComponent } from './brainy-quotes/small-brainy-quote/small-brainy-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    BrainyQuotesContainerComponent,
    TogglePointDirective,
    BigBrainyQuoteComponent,
    SmallBrainyQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
