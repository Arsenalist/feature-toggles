import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaScoresComponent } from './nba-scores.component';
import {NbaScore} from './nba-score';
import {DisplayScoreFactory} from './display-score-factory';
import {DisplayScoreWithMargin, DisplaySimpleScore} from './display-score';

describe('NbaScoresComponent', () => {
  let score: NbaScore;
  let component: NbaScoresComponent;
  let displayScoreFactory: DisplayScoreFactory;

  beforeEach(async(() => {
    score = {
      awayTeam: 'Utah',
      homeTeam: 'Portland',
      awayScore: 100,
      homeScore: 90
    };
    displayScoreFactory = new DisplayScoreFactory(null);
  }));

  it('should return a simple score without a margin being displayed', () => {
    component = new NbaScoresComponent(displayScoreFactory);
    jest.spyOn(displayScoreFactory, 'createDisplayScore').mockReturnValue(new DisplaySimpleScore(score));
    expect(component.displayScore(score)).toBe('100 - 90');
  });
  it('should return a score with a margin being displayed', () => {
    component = new NbaScoresComponent(displayScoreFactory);
    jest.spyOn(displayScoreFactory, 'createDisplayScore').mockReturnValue(new DisplayScoreWithMargin(score));
    expect(component.displayScore(score)).toBe('100 - 90 (10)');
  });

});
