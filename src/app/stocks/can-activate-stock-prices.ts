import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {FeatureDecisionsService} from '../feature-decisions.service';

@Injectable()
export class CanActivateStockPrices implements CanActivate {
  constructor(private featuresDecisionsService: FeatureDecisionsService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const featureDecisions =  this.featuresDecisionsService.featureDecisions();
    if (route.data) {
      const featureFlagValue =  featureDecisions[route.data.featureName];
      return !!featureFlagValue;
    }
    return false;
  }
}
