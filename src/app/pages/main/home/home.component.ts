import { Component, OnInit } from '@angular/core';

// Services
import { MoviesService } from '../../../shared/services/movies.service';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList: Array<Movie> = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.getMoviesUpcoming();
  }

  /**
   * Services
   */
  getMoviesUpcoming(): void {
    this.movieService.getMoviesUpcoming()
      .subscribe(
        res => {
          console.log(res);
          this.moviesList = res.results;
        },
        error => {
          console.log(error);
        }
      );
  }

}
