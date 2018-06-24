import { Component, Input, OnInit } from '@angular/core';

// Models
import { Movie } from '../../models/movie';

// Env
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mc-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movieList: Array<Movie> = [];

  imgUrl: string = environment.imgSizesUrl.poster_sizes.w342;

  constructor() { }

  ngOnInit() {
  }

}
