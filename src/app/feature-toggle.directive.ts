import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FeatureDecisionsService} from './feature-decisions.service';

@Directive({
  selector: '[appFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {

  @Input() featureName: string;

  constructor(private el: ElementRef, private featureDecisionsService: FeatureDecisionsService) { }

  ngOnInit() {
    const featureFlagValue = this.featureEnabled(this.featureDecisionsService.featureDecisions());
    this.el.nativeElement.style.display = this.toDisplayProperty(featureFlagValue);
  }


  private featureEnabled(featureDecisions): boolean {
    const value = featureDecisions[this.featureName];
    return !!value;
  }

  private toDisplayProperty(featureFlagValue: boolean): string {
    return featureFlagValue ? '' : 'none';
  }
}
