import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {

  it('should return three movies', () => {
    const movieService: MovieService = new MovieService();
    expect(movieService.allMovies().length).toBe(3);
  });
});
