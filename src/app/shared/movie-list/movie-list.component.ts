import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movieList: any[] = [0, 1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
