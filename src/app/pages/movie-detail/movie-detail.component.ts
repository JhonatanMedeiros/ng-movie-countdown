import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// External Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

// Services
import { MoviesService } from '../../shared/services/movies.service';

// Models
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'mc-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  private imgUrl: string = 'https://image.tmdb.org/t/p/w780/';

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private titleService: Title
  ) { }

  ngOnInit() {

    let movieId = Number(this.router.snapshot.params['id']);
    this.getMovieDetail(movieId);
  }

  /**
   * Services
   */
  getMovieDetail(movieId: number): void {

    this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-detail/[0-9]', 'Carregando Filme...');

    this.movieService.getMovieDetais(movieId)
      .subscribe(
        res => {
          this.movie = res;
          this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-detail/[0-9]', this.movie.title);
          this.titleService.setTitle(this.movie.title || this.movie.original_title);
        },
        error => {
          console.log(error);
        });

  }

}
