
import {FeatureAwareInvoker} from './feature-aware-invoker';
import {FeatureDecisionsService} from '../feature-decisions.service';

describe('FeatureDecisionsService', () => {
  let featureAwareInvoker: FeatureAwareInvoker;
  let featureDecisionsService: FeatureDecisionsService;
  let featureFlagOnFunction;
  let featureFlagOffFunction;

  beforeEach(() => {
    featureFlagOnFunction = jest.fn();
    featureFlagOffFunction = jest.fn();
    featureDecisionsService = new FeatureDecisionsService();
    featureAwareInvoker = new FeatureAwareInvoker(featureDecisionsService);
  });

  it('should call the true case when feature is enabled', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showBooksFromRussianAuthors: true
    });
    featureAwareInvoker.invoke('showBooksFromRussianAuthors', featureFlagOnFunction, featureFlagOffFunction, 'an argument');
    expect(featureFlagOnFunction).toHaveBeenCalledTimes(1);
    expect(featureFlagOnFunction).toHaveBeenCalledWith('an argument');
    expect(featureFlagOffFunction).not.toHaveBeenCalled();
  });

  it('should call the false case when feature is explicitly disabled', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showBooksFromRussianAuthors: false
    });
    featureAwareInvoker.invoke('showBooksFromRussianAuthors', featureFlagOnFunction, featureFlagOffFunction, 'an argument');
    expect(featureFlagOffFunction).toHaveBeenCalledTimes(1);
    expect(featureFlagOffFunction).toHaveBeenCalledWith('an argument');
    expect(featureFlagOnFunction).not.toHaveBeenCalled();
  });

  it('should call the false case when feature is undefined', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({});
    featureAwareInvoker.invoke('showBooksFromRussianAuthors', featureFlagOnFunction, featureFlagOffFunction, 'an argument');
    expect(featureFlagOffFunction).toHaveBeenCalledTimes(1);
    expect(featureFlagOffFunction).toHaveBeenCalledWith('an argument');
    expect(featureFlagOnFunction).not.toHaveBeenCalled();
  });
});
