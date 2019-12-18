import { TestBed } from '@angular/core/testing';

import { FeatureDecisionsService } from './feature-decisions.service';

describe('FeatureDecisionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureDecisionsService = TestBed.get(FeatureDecisionsService);
    expect(service).toBeTruthy();
  });
});
