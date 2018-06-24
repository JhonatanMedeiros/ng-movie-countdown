import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { IMovieResponse, Movie } from '../models/movie';

// Services
import { ConfigurationService } from './configuration.service';

@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }


  getMovieDetails(id: number): Observable<Movie> {

    let params = new HttpParams()
      .append('append_to_response', 'videos,credits,external_ids');

    return this.http.get(`/movie/${id}`, { params: params })
      .pipe(
        map(movie => new Movie(movie, this.configService))
      );
  }

  getMoviesPopular(page: number = 1): Observable<IMovieResponse> {

    const options = page ? { params: new HttpParams().set('page', page.toString()) } : {};

    return this.http.get(`/movie/popular`, options);
  }

  getMoviesUpcoming(page: number = 1): Observable<IMovieResponse> {

    const options = page ? { params: new HttpParams().set('page', page.toString()) } : {};

    return this.http.get(`/movie/upcoming`, options);
  }

}
