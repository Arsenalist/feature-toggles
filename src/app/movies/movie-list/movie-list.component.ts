import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Observable, of} from 'rxjs';
import {Movie} from '../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies$ = of(this.movieService.allMovies());
  }
}
