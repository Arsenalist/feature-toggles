import {Component, OnInit, ViewChild} from '@angular/core';
import {TogglePointDirective} from '../../toggle-point.directive';
import {FeatureToggledComponentFactory} from '../feature-toggled-component-factory.service';
import {BigBrainyQuoteComponent} from '../big-brainy-quote/big-brainy-quote.component';
import {SmallBrainyQuoteComponent} from '../small-brainy-quote/small-brainy-quote.component';


@Component({
  selector: 'app-brainy-quotes',
  templateUrl: './brainy-quotes-container.component.html',
  styleUrls: ['./brainy-quotes-container.component.scss']
})
export class BrainyQuotesContainerComponent implements OnInit {

  constructor(private brainyQuoteComponentFactory:
                FeatureToggledComponentFactory<BigBrainyQuoteComponent, SmallBrainyQuoteComponent>) { }

  @ViewChild('togglePoint1', {static: true}) togglePoint1: TogglePointDirective;
  @ViewChild('togglePoint2', {static: true}) togglePoint2: TogglePointDirective;


  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    this.togglePoint1.viewContainerRef.clear();
    this.togglePoint1.viewContainerRef.createComponent(
      this.brainyQuoteComponentFactory.featureToggledComponent(
        'showLargeBrainyQuotes',
        BigBrainyQuoteComponent,
        SmallBrainyQuoteComponent));

    this.togglePoint2.viewContainerRef.clear();
    this.togglePoint2.viewContainerRef.createComponent(
      this.brainyQuoteComponentFactory.featureToggledComponent(
        'showLargeBrainyQuotes',
        BigBrainyQuoteComponent,
        SmallBrainyQuoteComponent));


  }
}
