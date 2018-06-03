import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { MovieListComponent } from './components/movie-list/movie-list.component';

// Services
import { MoviesService } from './services/movies.service';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MoviesService,
        SearchService
      ]
    };
  }
}
