import { Component, Input, OnInit } from '@angular/core';

// Models
import { Movie } from '../../../../shared/models/movie';

// Env
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'mc-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') movie: Movie;

  imgUrl: string = environment.imgSizesUrl.w500;

  constructor() { }

  ngOnInit() {
  }

}
