import { Component, Input, OnInit } from '@angular/core';

// Models
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'mc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input('movie') movie: Movie = undefined;

  constructor() { }

  ngOnInit() { }

}
