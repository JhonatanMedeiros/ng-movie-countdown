// Angular Imports
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { HomeComponent } from './pages/main/home/home.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieCardComponent } from './pages/main/home/movie-card/movie-card.component';
import { MoviePopularComponent } from './pages/movie-popular/movie-popular.component';
import { InputSearchComponent } from './pages/main/header/input-search/input-search.component';

// Services
import { HttpInterceptorService } from './shared/services/local/http-interceptor.service';

// Modules
import { SharedModule } from './shared/shared.module';

// Route Config
import { APP_ROUTES } from './app.routes';

// Env
import { environment } from '../environments/environment';

registerLocaleData(localePt, localePtExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MovieCardComponent,
    MoviePopularComponent,
    AboutComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
