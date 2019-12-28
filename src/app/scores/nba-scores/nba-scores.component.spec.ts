import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaScoresComponent } from './nba-scores.component';

describe('NbaScoresComponent', () => {
  let component: NbaScoresComponent;
  let fixture: ComponentFixture<NbaScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
