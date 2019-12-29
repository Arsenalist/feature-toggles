import { Injectable } from '@angular/core';

const FEATURE_DECISIONS = {
  showLargeBrainyQuotes: true,
  showMovieDescriptions: true,
  viewingStockPricesEnabled: true,
  showNbaScoreMargins: true,
  showBooksFromRussianAuthors: true
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
