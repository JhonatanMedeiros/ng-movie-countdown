// Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { IMovieImages, IMovieResponse, Movie } from '../models/movie';

// Services
import { ConfigurationService } from './configuration.service';

// Env
import { environment } from '../../../environments/environment';

@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }


  getMovieDetails(id: number): Observable<Movie> {

    const params = new HttpParams()
      .append('append_to_response', 'videos,credits,external_ids')
      .append('region', environment.apiRegion)
      .append('language', environment.apiLanguage);

    return this.http.get<Movie>(`/movie/${id}`, { params: params })
      .pipe(
        map(movie => new Movie(movie, this.configService))
      );
  }

  getMovieImages(id: number): Observable<IMovieImages> {
    return this.http.get<IMovieImages>(`/movie/${id}/images`);
  }

  getMoviesPopular(page: number = 1): Observable<IMovieResponse> {

    const params = new HttpParams()
      .append('region', environment.apiRegion)
      .append('language', environment.apiLanguage);

    if (page) {
      params.append('page', page.toString());
    }

    return this.http.get<IMovieResponse>(`/movie/popular`, { params: params});
  }

  getMoviesUpcoming(page: number = 1): Observable<IMovieResponse> {

    const params = new HttpParams()
      .append('region', environment.apiRegion)
      .append('language', environment.apiLanguage);

    if (page) {
      params.append('page', page.toString());
    }

    return this.http.get<IMovieResponse>('/movie/upcoming', { params: params });
  }

}
