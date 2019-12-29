import { Component, OnInit } from '@angular/core';
import {FeatureAwareInvoker} from '../feature-aware-invoker';
import {Observable, of} from 'rxjs';
import {Book} from '../book';
import {BOOKSTORE_DATA} from '../bookstore-data';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.scss']
})
export class BookListingComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private featureAwareInvoker: FeatureAwareInvoker) { }

  ngOnInit() {
    this.books$ = this.featureAwareInvoker.invoke(
      'showBooksFromRussianAuthors',
      this.withRussianAuthors,
      this.withoutRussianAuthors,
      BOOKSTORE_DATA);
  }

  private withRussianAuthors(books: Book[]): Observable<Book[]> {
    return of(books);
  }

  private withoutRussianAuthors(books: Book[]): Observable<Book[]> {
    return of(books.filter( (book) => book.authorCountry !== 'Russia'));
  }
}
