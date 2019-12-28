import {NbaScore} from './nba-score';

export interface DisplayScore {
  display(): string;
}

export class DisplaySimpleScore implements DisplayScore {

  score: NbaScore;

  constructor(score: NbaScore) {
    this.score = score;
  }

  public display(): string {
    return `${this.score.awayScore} - ${this.score.homeScore}`;
  }
}

export class DisplayScoreWithMargin extends DisplaySimpleScore implements DisplayScore {
  public display(): string {
    return `${super.display()} ${this.margin()}`;
  }

  private margin(): string {
    return `(${Math.abs(this.score.awayScore - this.score.homeScore)})`;
  }
}
