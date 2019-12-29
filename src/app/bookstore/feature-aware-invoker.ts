import {FeatureDecisionsService} from '../feature-decisions.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureAwareInvoker {

  constructor(private featureDecisionsService: FeatureDecisionsService) { }

  public invoke(featureName: string, featureFlagOnFunction, featureFlagOffFunction, ...rest: any[]) {
    const featureDecisions = this.featureDecisionsService.featureDecisions();
    const featureFlagValue =  !!featureDecisions[featureName];
    if (featureFlagValue === true) {
      return featureFlagOnFunction(...rest);
    } else {
      return featureFlagOffFunction(...rest);
    }
  }
}
