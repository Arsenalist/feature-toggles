import { FeatureToggleDirective } from './feature-toggle.directive';
import {ElementRef} from '@angular/core';
import {FeatureDecisionsService} from '../feature-decisions.service';

describe('FeatureToggleDirective', () => {
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockElementRef = new ElementRef(null);
    mockElementRef.nativeElement = jest.fn();
    mockElementRef.nativeElement.style = jest.fn();
    mockElementRef.nativeElement.style.display = jest.fn();
  });

  it('should set element to none when showMovieDescription is false', () => {
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showMovieDescriptions: false
    });

    // create directive
    const directive = new FeatureToggleDirective(mockElementRef, featureDecisionsService);
    directive.featureName = 'showMovieDescriptions';
    directive.ngOnInit();

    expect(mockElementRef.nativeElement.style.display).toEqual('none');
  });

  it('should set element to none when showMovieDescription is undefined', () => {
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
    });

    // create directive
    const directive = new FeatureToggleDirective(mockElementRef, featureDecisionsService);
    directive.featureName = 'showMovieDescriptions';
    directive.ngOnInit();

    expect(mockElementRef.nativeElement.style.display).toEqual('none');
  });

  it('should set element to empty string when showMovieDescription is true', () => {
    const featureDecisionsService = new FeatureDecisionsService();
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showMovieDescriptions: true
    });

    // create directive
    const directive = new FeatureToggleDirective(mockElementRef, featureDecisionsService);
    directive.featureName = 'showMovieDescriptions';
    directive.ngOnInit();

    expect(mockElementRef.nativeElement.style.display).toEqual('');
  });
});
