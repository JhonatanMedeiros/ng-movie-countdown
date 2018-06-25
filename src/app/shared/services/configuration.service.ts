import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Models
import { ISpokenLanguages } from '../models/movie';

// Models

@Injectable()
export class ConfigurationService {

  spokenLanguages: Array<ISpokenLanguages> = [];

  constructor(
    protected http: HttpClient
  ) { }

  getLanguages(): Observable<ISpokenLanguages[]> {
    if (this.spokenLanguages.length) {
      return of(this.spokenLanguages);
    } else {
      return this.syncGetLanguages();
    }
  }

  syncGetLanguages(): Observable<ISpokenLanguages[]> {
    return this.http.get<ISpokenLanguages[]>(`/configuration/languages`)
      .pipe(
        tap(languages => this.spokenLanguages = languages)
      );
  }
}
