import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {NbaScore} from './nba-score';
import {DisplayScoreFactory} from './display-score-factory';
import {SCOREBOARD} from './score-data';

@Component({
  selector: 'app-nba-scores',
  templateUrl: './nba-scores.component.html',
  styleUrls: ['./nba-scores.component.scss']
})
export class NbaScoresComponent implements OnInit {

  scores$: Observable<NbaScore[]>;

  constructor(private displayScoreFactory: DisplayScoreFactory) { }

  ngOnInit() {
    this.scores$ = of(SCOREBOARD);
  }

  displayScore(score: NbaScore) {
    return this.displayScoreFactory.createDisplayScore(score).display();
  }
}
