import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'mc-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie: Movie;

  private imgUrl: string = 'https://image.tmdb.org/t/p/w500/';

  constructor() { }

  ngOnInit() {
  }

}
