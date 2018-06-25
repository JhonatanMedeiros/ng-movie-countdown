// Angular Imports
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// Env
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const params = new HttpParams()
      .append('api_key', environment.apiKey);

    request = request.clone({
      url: `${environment.apiUrl + request.urlWithParams}`,
      params: params
    });

    return next.handle(request);
  }
}
