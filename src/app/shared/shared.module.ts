import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ]
})
export class SharedModule { }
