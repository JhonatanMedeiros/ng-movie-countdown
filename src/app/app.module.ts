import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';

// External Libs
import { BreadcrumbService, Ng5BreadcrumbModule } from 'ng5-breadcrumb';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { HomeComponent } from './pages/main/home/home.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieCardComponent } from './pages/main/home/movie-card/movie-card.component';
import { MoviePopularComponent } from './pages/movie-popular/movie-popular.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

// Services
import { HttpInterceptorService } from './shared/services/local/http-interceptor.service';

// Modules
import { SharedModule } from './shared/shared.module';

// Route Config
import { APP_ROUTES } from './app.routes';

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
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    SharedModule.forRoot(),
    Ng5BreadcrumbModule.forRoot()
  ],
  providers: [
    BreadcrumbService,
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
