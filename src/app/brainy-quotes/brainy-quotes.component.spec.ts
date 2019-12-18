import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainyQuotesComponent } from './brainy-quotes.component';

describe('BrainyQuotesComponent', () => {
  let component: BrainyQuotesComponent;
  let fixture: ComponentFixture<BrainyQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainyQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainyQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
