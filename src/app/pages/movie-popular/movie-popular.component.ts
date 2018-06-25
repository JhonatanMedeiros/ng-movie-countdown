// Angular Imports
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// External Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

// Services
import { MoviesService } from '../../shared/services/movies.service';
import { LogService } from '../../shared/services/local/log.service';

// Models
import { Movie } from '../../shared/models/movie';

// Env
import { environment } from '../../../environments/environment';

@Component({
  selector: 'mc-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss']
})
export class MoviePopularComponent implements OnInit {

  movieList: Array<Movie> = [];

  imgUrl: string = environment.imgSizesUrl.poster_sizes.w342;

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalItems: number;
  totalPages: number;
  maxSize: number = 5;

  isLoading: boolean = false;

  constructor(
    private movieService: MoviesService,
    private breadcrumbService: BreadcrumbService,
    private titleService: Title,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.getMoviesPopular();
    this.titleService.setTitle('Filmes Populares');
    this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-popular', 'Filmes Populares');
  }

  /**
   * Services
   */
  getMoviesPopular(page: number = 1): void {
    this.isLoading = true;
    this.movieList = [];
    this.movieService.getMoviesPopular(page)
      .subscribe(
        res => {
          this.movieList = res.results;
          this.totalItems = res.total_results;
          this.totalPages = res.total_pages;
          this.currentPage = res.page;
        },
        error => {
          this.logService.error('getMoviesPopular', error);
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  /**
   * Functions
   */
  pageChanged(event: any): void {
    if (this.currentPage !== event.page) {
      this.getMoviesPopular(event.page);
    }
  }
}
