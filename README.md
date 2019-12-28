# Feature Flag Demos

Three examples of feature toggles are provided. 

1. An attribute directive which hides content in a template based on a feature flag.
2. A route guard which implements the `CanActivate' interface to turn a route on/off based on a feature flag.
3. A dynamic component loader which loads a particular component based on a feature flag.
4. Selecting the right class to use inside a component when executing business logic (based on a feature flag).

## Attribute Directive

Based on the `showMovieDescriptions` flag in `FeatureDecisionsService` the application will 
either show or hide movie descriptions on the following URL:

http://localhost:4200/movies

## Route Guard

Based on the `viewingStockPricesEnabled` flag in `FeatureDecisionsService` the application 
will either enable or disable access to the following URL:

http://localhost:4200/stock-prices


## Dynamic Component Loader

Based on the `showLargeBrainyQuotes` flag in `FeatureDecisionsService` the application will either load the
`SmallBrainyQuoteComponent` or `BigBrainyQuoteComponent` when visiting the following URL:

http://localhost:4200/brainy-quotes

## Factory Method / Strategy

Based on `showNbaScoreMargins` flag in `FeatureDecisionsService` the application will either display NBA scores 
with or without a margin. This is accomplished by splitting out logic into different classes and using the Strategy
pattern combined with the Factory Method pattern. A demo can be seen at: 

http://localhost:4200/nba-scores
