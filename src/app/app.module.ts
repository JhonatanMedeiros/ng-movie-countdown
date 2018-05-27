import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/footer/footer.component';
import { MovieCardComponent } from './main/home/movie-card/movie-card.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';

// Modules
import { SharedModule } from './shared/shared.module';

// Route Config
import { APP_ROUTES } from './app.routes';
import { AboutComponent } from './about/about.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
