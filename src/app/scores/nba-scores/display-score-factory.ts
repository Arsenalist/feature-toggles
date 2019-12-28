import {Injectable} from '@angular/core';
import {FeatureDecisionsService} from '../../feature-decisions.service';
import {NbaScore} from './nba-score';
import {DisplayScoreWithMargin, DisplaySimpleScore} from './display-score';

@Injectable({
  providedIn: 'root'
})
export class DisplayScoreFactory {

  constructor(private featureDecisionsService: FeatureDecisionsService) {}

  public createDisplayScore(score: NbaScore) {
    const featureDecisions = this.featureDecisionsService.featureDecisions();
    if (featureDecisions.showNbaScoreMargins === true) {
      return new DisplayScoreWithMargin(score);
    } else {
      return new DisplaySimpleScore(score);
    }
  }
}
