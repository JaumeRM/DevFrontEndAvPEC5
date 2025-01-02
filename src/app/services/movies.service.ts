import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection.interface';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Collection> {
    const TMDB_API_KEY = '60fd81392ec1989b4c82ae335e95825d';
    return this.http.get<Collection>(
      'https://api.themoviedb.org/3/collection/' +
        645 +
        '?api_key=' +
        TMDB_API_KEY +
        '&language=es-ES'
    );
  }

  getMovieById(id: String): Observable<Movie> {
    const TMDB_API_KEY = '60fd81392ec1989b4c82ae335e95825d';
    return this.http.get<Movie>(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=' +
        TMDB_API_KEY +
        '&language=es-ES'
    );
  }
}
