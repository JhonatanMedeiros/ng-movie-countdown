import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './main/home/home.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { AboutComponent } from './about/about.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'movie-popular', component: MoviePopularComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
