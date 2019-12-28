import {DisplayScore, DisplayScoreWithMargin, DisplaySimpleScore} from './display-score';
import {NbaScore} from './nba-score';
import {DisplayScoreFactory} from './display-score-factory';
import {FeatureDecisionsService} from '../../feature-decisions.service';

describe('DisplayScoreFactory', () => {
  let score: NbaScore;
  beforeEach(() => {
    score = {
      awayTeam: 'Utah',
      homeTeam: 'Portland',
      awayScore: 100,
      homeScore: 90
    };
  });

  it('should return DisplaySimpleScore when showNbaScoreMargins is false', () => {
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showNbaScoreMargins: false
    });
    const factory: DisplayScoreFactory = new DisplayScoreFactory(featureDecisionsService);
    expect(factory.createDisplayScore(score) instanceof DisplaySimpleScore).toBeTruthy();
  });

  it('should return DisplaySimpleScore when showNbaScoreMargins is undefined', () => {
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({});
    const factory: DisplayScoreFactory = new DisplayScoreFactory(featureDecisionsService);
    expect(factory.createDisplayScore(score) instanceof DisplaySimpleScore).toBeTruthy();
  });

  it('should return DisplayScoreWithMargin when showNbaScoreMargins is true', () => {
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showNbaScoreMargins: true
    });
    const factory: DisplayScoreFactory = new DisplayScoreFactory(featureDecisionsService);
    expect(factory.createDisplayScore(score) instanceof DisplayScoreWithMargin).toBeTruthy();
  });

});
