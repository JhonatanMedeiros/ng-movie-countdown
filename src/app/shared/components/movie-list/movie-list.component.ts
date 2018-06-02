import { Component, Input, OnInit } from '@angular/core';

// Models
import { Movie } from '../../models/movie';

@Component({
  selector: 'mc-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movieList: Array<Movie> = [];

  private imgUrl: string = 'https://image.tmdb.org/t/p/w780/';

  constructor() { }

  ngOnInit() {
  }

}
