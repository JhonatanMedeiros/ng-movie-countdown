import { Component, Input, OnInit } from '@angular/core';

// Models
import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'mc-tab-info',
  templateUrl: './tab-info.component.html',
  styleUrls: ['./tab-info.component.scss']
})
export class TabInfoComponent implements OnInit {

  @Input('movie') movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
