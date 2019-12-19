import {ActivatedRouteSnapshot} from '@angular/router';
import {FeatureDecisionsService} from '../feature-decisions.service';
import {CanActivateStockPrices} from './can-activate-stock-prices';

describe('FeatureDecisionsService', () => {
  let featureDecisionsService: FeatureDecisionsService;
  let activatedRouteSnapshot: ActivatedRouteSnapshot;

  beforeEach(() => {
    featureDecisionsService = new FeatureDecisionsService();
    activatedRouteSnapshot = new ActivatedRouteSnapshot();
    activatedRouteSnapshot.data = {featureName: 'viewingStockPricesEnabled'};
  });

  it('should return true when feature flag is enabled', () => {

    jest.spyOn(featureDecisionsService, 'featureDecisions')
      .mockReturnValue({viewingStockPricesEnabled: true});

    const guard: CanActivateStockPrices = new CanActivateStockPrices(featureDecisionsService);
    expect(guard.canActivate(activatedRouteSnapshot, null)).toBe(true);
  });

  it('should return false when feature flag is disabled', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions')
      .mockReturnValue({viewingStockPricesEnabled: false});

    const guard: CanActivateStockPrices = new CanActivateStockPrices(featureDecisionsService);
    expect(guard.canActivate(activatedRouteSnapshot, null)).toBe(false);
  });

  it('should return false when feature flag is undefined', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions')
      .mockReturnValue({viewingStockPricesEnabled: false});

    const guard: CanActivateStockPrices = new CanActivateStockPrices(featureDecisionsService);
    expect(guard.canActivate(activatedRouteSnapshot, null)).toBe(false);
  });
});
