import { Injectable } from '@angular/core';
import {Movie, MOVIES} from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  public allMovies(): Movie[] {
    return MOVIES;
  }
}
