import {BrainyQuoteComponentFactory} from './brainy-quote-component-factory';
import {BigBrainyQuoteComponent} from './big-brainy-quote/big-brainy-quote.component';
import {FeatureDecisionsService} from '../feature-decisions.service';
import {ComponentFactory, ComponentFactoryResolver, Type} from '@angular/core';
import {SmallBrainyQuoteComponent} from './small-brainy-quote/small-brainy-quote.component';

class MockComponentFactoryResolver extends ComponentFactoryResolver {

  resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
    return undefined;
  }
}

describe('BrainyQuotesService', () => {
  it('should return BigBrainyQuotesComponent', () => {

    // setup: have feature decision service return true
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showLargeBrainyQuotes: true
    });

    // setup: spy on the component factory
    const mockComponentFactoryResolver = new MockComponentFactoryResolver();
    const resolveComponentFactorySpy = jest.spyOn(mockComponentFactoryResolver, 'resolveComponentFactory');

    // execute
    const brainy = new BrainyQuoteComponentFactory(featureDecisionsService, mockComponentFactoryResolver);
    brainy.brainyQuoteComponent();

    // verify that the right component got instantiated
    expect(resolveComponentFactorySpy).toHaveBeenCalledWith(BigBrainyQuoteComponent);
  });

  it('should return SmallBrainyQuotesComponent', () => {

    // setup: have feature decision service return false
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showLargeBrainyQuotes: false
    });

    // setup: spy on the component factory
    const mockComponentFactoryResolver = new MockComponentFactoryResolver();
    const resolveComponentFactorySpy = jest.spyOn(mockComponentFactoryResolver, 'resolveComponentFactory');

    // execute
    const brainy = new BrainyQuoteComponentFactory(featureDecisionsService, mockComponentFactoryResolver);
    brainy.brainyQuoteComponent();

    // verify that the right component got instantiated
    expect(resolveComponentFactorySpy).toHaveBeenCalledWith(SmallBrainyQuoteComponent);
  });
});
