import {FeatureDecisionsService} from '../feature-decisions.service';
import {ComponentFactory, ComponentFactoryResolver, Injectable, Type} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggledComponentFactory<FeatureOnComponent, FeatureOffComponent> {

  constructor(private featureDecisionsService: FeatureDecisionsService,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  public featureToggledComponent(featureName: string,
                                 featureOnComponent: Type<FeatureOnComponent>,
                                 featureOffComponent: Type<FeatureOffComponent>):
    ComponentFactory<FeatureOnComponent | FeatureOffComponent> {
    const featureDecisions = this.featureDecisionsService.featureDecisions();
    const featureValue = featureDecisions[featureName];
    return featureValue === true ?
      this.componentFactoryResolver.resolveComponentFactory(featureOnComponent) :
      this.componentFactoryResolver.resolveComponentFactory(featureOffComponent);
  }
}
