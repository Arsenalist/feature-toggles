import { TestBed } from '@angular/core/testing';

import { FeatureDecisionsService } from './feature-decisions.service';

describe('FeatureDecisionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return a map of feature decisions', () => {
    const service: FeatureDecisionsService = TestBed.get(FeatureDecisionsService);
    expect(service.featureDecisions().showLargeBrainyQuotes).toEqual(true);
  });
});
