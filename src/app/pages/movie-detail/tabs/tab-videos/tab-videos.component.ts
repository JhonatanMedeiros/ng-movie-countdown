import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'mc-tab-videos',
  templateUrl: './tab-videos.component.html'
})
export class TabVideosComponent implements OnInit {

  @Input('movie') movie: Movie = undefined;

  constructor() { }

  ngOnInit() {
  }

}
