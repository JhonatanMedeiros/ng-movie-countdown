// Angular Imports
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Services
import { MoviesService } from '../../../shared/services/movies.service';
import { LogService } from '../../../shared/services/local/log.service';

// Models
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList: Array<Movie> = [];

  isLoading: boolean = false;

  constructor(
    private movieService: MoviesService,
    private logService: LogService,
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
    this.isLoading = true;
    this.movieService.getMoviesUpcoming()
      .subscribe(
        res => {
          this.moviesList = res.results;
        },
        error => {
          this.logService.error('getMoviesUpcoming', error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

}
