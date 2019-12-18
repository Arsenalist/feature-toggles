import { BigBrainyQuoteComponent } from './big-brainy-quote.component';
import {BrainyQuotesService} from '../brainy-quotes.service';

describe('BigBrainyQuoteComponent', () => {

  it('should setup the brainy quotes by calling the service', () => {
    const brainyQuotesService: BrainyQuotesService = new BrainyQuotesService();
    const allBrainyQuotesSpy = jest.spyOn(brainyQuotesService, 'allBrainyQuotes');
    const component: BigBrainyQuoteComponent = new BigBrainyQuoteComponent(brainyQuotesService);

    component.ngOnInit();

    expect(component.brainyQuotes$).not.toBeNull();
    expect(allBrainyQuotesSpy).toHaveBeenCalledTimes(1);
  });
});
