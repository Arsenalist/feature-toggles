import {BookListingComponent} from "./book-listing.component";
import {FeatureAwareInvoker} from '../feature-aware-invoker';
import {FeatureDecisionsService} from '../../feature-decisions.service';

describe('BookListingComponent', () => {
  let bookListingComponent: BookListingComponent;
  let featureAwareInvoker: FeatureAwareInvoker;
  let featureDecisionsService: FeatureDecisionsService;

  beforeEach(() => {
    featureDecisionsService = new FeatureDecisionsService();
    featureAwareInvoker = new FeatureAwareInvoker(featureDecisionsService);
    bookListingComponent = new BookListingComponent(featureAwareInvoker);
  });

  it('should return books with Russian authors', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showBooksFromRussianAuthors: true
    });

    bookListingComponent.ngOnInit();

    bookListingComponent.books$.subscribe(books => {
      expect(books.length).toBe(5);
      expect(books[2].authorCountry).not.toBe('Russia');
      expect(books[2].authorCountry).toBe('Russia');
      expect(books[3].authorCountry).toBe('Russia');
    });
  });

  it('should return books without Russian authors', () => {
    jest.spyOn(featureDecisionsService, 'featureDecisions').mockReturnValue({
      showBooksFromRussianAuthors: false
    });

    bookListingComponent.ngOnInit();

    bookListingComponent.books$.subscribe(books => {
      expect(books.length).toBe(3);
      expect(books[0].authorCountry).not.toBe('Russia');
      expect(books[1].authorCountry).not.toBe('Russia');
      expect(books[2].authorCountry).not.toBe('Russia');
    });
  });

});
