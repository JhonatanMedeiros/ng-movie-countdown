import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/main/home/home.component';
import { MoviePopularComponent } from './pages/movie-popular/movie-popular.component';
import { AboutComponent } from './pages/about/about.component';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent  },
      { path: 'about', component: AboutComponent  },
      { path: 'movie-popular', component: MoviePopularComponent },
      { path: 'movie-detail',  loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule) }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
