import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Movie, MovieResponse } from '../models/movie';


@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }


  getMovieDetais(id: number): Observable<Movie> {

    let params = new HttpParams()
      .append('append_to_response', 'videos,credits');

    return this.http.get(`/movie/${id}`, { params: params });
  }

  getMoviesPopular(page: number = 1): Observable<MovieResponse> {

    const options = page ? { params: new HttpParams().set('page', page.toString()) } : {};

    return this.http.get(`/movie/popular`, options);
  }

  getMoviesUpcoming(page: number = 1): Observable<MovieResponse> {

    const options = page ? { params: new HttpParams().set('page', page.toString()) } : {};

    return this.http.get(`/movie/upcoming`, options);
  }

}
