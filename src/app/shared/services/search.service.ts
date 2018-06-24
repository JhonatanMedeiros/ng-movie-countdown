import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { IMovieResponse } from '../models/movie';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchMovie(query: string): Observable<IMovieResponse> {

    const options = query ? { params: new HttpParams().set('query', query) } : {};

    return this.http.get(`/search/movie`, options);

  }
}
