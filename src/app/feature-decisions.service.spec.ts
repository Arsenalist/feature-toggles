import { TestBed } from '@angular/core/testing';

import { FeatureDecisionsService } from './feature-decisions.service';

describe('FeatureDecisionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return a map of feature decisions', () => {
    const service: FeatureDecisionsService = TestBed.get(FeatureDecisionsService);
    expect(service.featureDecisions().showLargeBrainyQuotes).toEqual(true);
    expect(service.featureDecisions().showMovieDescriptions).toEqual(false);
    expect(service.featureDecisions().viewingStockPricesEnabled).toEqual(true);
    expect(service.featureDecisions().showNbaScoreMargins).toEqual(true);
  });
});
