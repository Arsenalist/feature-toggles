# Feature Flag Demos

Three examples of feature toggles are provided. 

1. An attribute directive which hides content in a template based on a feature flag.
2. A route guard which implements the `CanActivate' interface to turn a route on/off based on a feature flag.
3. A dynamic component loader which loads a particular component based on a feature flag.
4. Selecting the right class to use inside a component when executing business logic (based on a feature flag).
5. Select the right method to invoke by delegating feature decision query logic to a separate class.

## Attribute Directive

Based on the `showMovieDescriptions` flag in `FeatureDecisionsService` the application will 
either show or hide movie descriptions on the following URL:

http://localhost:4200/movies

### Use Cases

- Simple text or images that need to be hidden on a page.
- Structural blocks of content that need to be hidden.
- There is negligible performance cost of the data being rendered "behind the scenes"
- Works for both short and long-lived feature toggles as code is not intrusive.

## Route Guard

Based on the `viewingStockPricesEnabled` flag in `FeatureDecisionsService` the application 
will either enable or disable access to the following URL:

http://localhost:4200/stock-prices

### Use Cases

- A user's access to a particular URL must be controlled.
- Service calls to backend systems must be controlled.


## Dynamic Component Loader

Based on the `showLargeBrainyQuotes` flag in `FeatureDecisionsService` the application will either load the
`SmallBrainyQuoteComponent` or `BigBrainyQuoteComponent` when visiting the following URL:

http://localhost:4200/brainy-quotes

### Use Cases

- There is a tangible cost to rendering components - unlike the Feature Toggle directive where content 
is rendered in a hidden state, this method does not render the content at all.
- There is considerable and significantly differing business logic in each component.

## Factory Method / Strategy

Based on `showNbaScoreMargins` flag in `FeatureDecisionsService` the application will either display NBA scores 
with or without a margin. This is accomplished by splitting out logic into different classes and using the Strategy
pattern combined with the Factory Method pattern. A demo can be seen at: 

http://localhost:4200/nba-scores

### Use Cases

- Within a component there is enough business logic that separate classes are required to model the features being
toggled.
- The features are related enough that re-use can be achieved using object oriented design (e.g., through inheritance).

## Feature Aware Invoker

Based on `showBooksFromRussianAuthors` flag in `FeatureDecisionsService` the application will show Russian authors
or not. This pattern delegates the responsibility of both consulting the `FeatureDecisionsService` and invoking
the appropriate method to a different class. This avoid spraying if/else blocks in component code for simple 
cases. It also forces the developer to write small functions. A demo can be seen here:

http://localhost:4200/books

### Use Cases

- The business logic differentiating the two features is simple enough to be abstracted into two different methods
- The business logic is similar enough that both variants require the same number of arguments 
(e.g., method parameters).
