import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/main/home/home.component';
import { MoviePopularComponent } from './pages/movie-popular/movie-popular.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent  },
      { path: 'about', component: AboutComponent  },
      { path: 'movie-popular', component: MoviePopularComponent },
      { path: 'movie-detail/:id', component: MovieDetailComponent }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];


/*
*
* export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'movie-popular', component: MoviePopularComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
*
*
*
* */
