import { Injectable } from '@angular/core';

const FEATURE_DECISIONS = {
  showLargeBrainyQuotes: false,
  showMovieDescriptions: true,
  viewingStockPricesEnabled: true,
  showNbaScoreMargins: true
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
