import {Component, OnInit, ViewChild} from '@angular/core';
import {TogglePointDirective} from '../toggle-point.directive';
import {BrainyQuoteComponentFactory} from './brainy-quote-component-factory';

@Component({
  selector: 'app-brainy-quotes',
  templateUrl: './brainy-quotes-container.component.html',
  styleUrls: ['./brainy-quotes-container.component.scss']
})
export class BrainyQuotesContainerComponent implements OnInit {

  constructor(private brainyQuoteComponentFactory: BrainyQuoteComponentFactory) { }

  @ViewChild(TogglePointDirective, {static: true}) togglePoint: TogglePointDirective;

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    this.togglePoint.viewContainerRef.clear();
    this.togglePoint.viewContainerRef.createComponent(this.brainyQuoteComponentFactory.brainyQuoteComponent());
  }
}
