import {FeatureDecisionsService} from '../feature-decisions.service';
import {BigBrainyQuoteComponent} from '../big-brainy-quote/big-brainy-quote.component';
import {SmallBrainyQuoteComponent} from './small-brainy-quote/small-brainy-quote.component';
import {ComponentFactory, ComponentFactoryResolver, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrainyQuoteComponentFactory {

  constructor(private featureDecisionsService: FeatureDecisionsService, private componentFactoryResolver: ComponentFactoryResolver) {}

  public brainyQuoteComponent(): ComponentFactory<BigBrainyQuoteComponent | SmallBrainyQuoteComponent> {
    const featureDecisions = this.featureDecisionsService.featureDecisions();
    return featureDecisions.showLargeBrainyQuotes === true ?
      this.componentFactoryResolver.resolveComponentFactory(BigBrainyQuoteComponent) :
      this.componentFactoryResolver.resolveComponentFactory(SmallBrainyQuoteComponent);
  }
}
