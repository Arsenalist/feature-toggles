import {Component, OnInit, ViewChild} from '@angular/core';
import {TogglePointDirective} from '../../toggle-point.directive';
import {BrainyQuoteComponentFactory} from '../brainy-quote-component-factory';

@Component({
  selector: 'app-brainy-quotes',
  templateUrl: './brainy-quotes-container.component.html',
  styleUrls: ['./brainy-quotes-container.component.scss']
})
export class BrainyQuotesContainerComponent implements OnInit {

  constructor(private brainyQuoteComponentFactory: BrainyQuoteComponentFactory) { }

  @ViewChild('togglePoint1', {static: true}) togglePoint1: TogglePointDirective;
  @ViewChild('togglePoint2', {static: true}) togglePoint2: TogglePointDirective;


  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    this.togglePoint1.viewContainerRef.clear();
    this.togglePoint1.viewContainerRef.createComponent(this.brainyQuoteComponentFactory.brainyQuoteComponent());

    this.togglePoint2.viewContainerRef.clear();
    this.togglePoint2.viewContainerRef.createComponent(this.brainyQuoteComponentFactory.brainyQuoteComponent());

  }
}
