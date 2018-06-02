import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// External Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

// Services
import { MoviesService } from '../../shared/services/movies.service';

// Models
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'mc-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss']
})
export class MoviePopularComponent implements OnInit {

  movieList: Array<Movie> = [];

  constructor(
    private movieService: MoviesService,
    private breadcrumbService: BreadcrumbService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.getMoviesPopular();
    this.titleService.setTitle('Filmes Populares');
    this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-popular', 'Filmes Populares');
  }

  /**
   * Services
   */
  getMoviesPopular(): void {
    this.movieService.getMoviesPopular()
      .subscribe(
        res => {
          this.movieList = res.results;
        },
        error => {
          console.log(error);
        }
      );
  }

}
