import { Injectable } from '@angular/core';

const FEATURE_DECISIONS = {
  showLargeBrainyQuotes: true
};

@Injectable({
  providedIn: 'root'
})
export class FeatureDecisionsService {

  constructor() { }

  public featureDecisions(): any {
    return FEATURE_DECISIONS;
  }
}
