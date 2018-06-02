import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    private movieService: MoviesService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Movie Countdown');
    this.getMoviesUpcoming();
  }

  /**
   * Services
   */
  getMoviesUpcoming(): void {
    this.movieService.getMoviesUpcoming()
      .subscribe(
        res => {
          this.moviesList = res.results;
        },
        error => {
          console.log(error);
        }
      );
  }

}
