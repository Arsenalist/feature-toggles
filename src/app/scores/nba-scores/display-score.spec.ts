import {DisplayScore, DisplayScoreWithMargin, DisplaySimpleScore} from './display-score';
import {NbaScore} from './nba-score';

describe('DisplayScore', () => {
  let score: NbaScore;
  beforeEach(() => {
    score = {
      awayTeam: 'Utah',
      homeTeam: 'Portland',
      awayScore: 100,
      homeScore: 90
    };
  });

  it('simple display score should return a properly formatted score', () => {
    const displayScore: DisplayScore = new DisplaySimpleScore(score);
    expect(displayScore.display()).toBe('100 - 90');
  });

  it('simple display score should return a properly formatted score', () => {
    const displayScore: DisplayScore = new DisplayScoreWithMargin(score);
    expect(displayScore.display()).toBe('100 - 90 (10)');
  });

});
