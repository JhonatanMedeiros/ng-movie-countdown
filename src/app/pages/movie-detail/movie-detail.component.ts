import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// External Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

// Services
import { MoviesService } from '../../shared/services/movies.service';
import { LogService } from '../../shared/services/local/log.service';

// Models
import { ICastProfile, Movie } from '../../shared/models/movie';

// Env
import { environment } from '../../../environments/environment';

@Component({
  selector: 'mc-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie = undefined;

  movieCrewDirectiong: Array<ICastProfile> = [];

  // Countdown Timer
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  imgUrl: string = environment.imgSizesUrl.poster_sizes.w342;

  isLoadingMovie: boolean = false;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private titleService: Title,
    private logService: LogService
  ) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      let movieId = Number(params['id']);
      this.getMovieDetail(movieId);
    });
  }

  /**
   * Services
   */
  getMovieDetail(movieId: number): void {

    this.isLoadingMovie = true;

    this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-detail/[0-9]', 'Carregando Filme...');

    this.movieService.getMovieDetails(movieId)
      .subscribe(
        res => {
          this.movie = res;
          // console.log(res);
          this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-detail/[0-9]', this.movie.title);
          this.titleService.setTitle(this.movie.title || this.movie.original_title);
          this.countdownTimer();
          this.getMovieCrewDirecting();
        },
        error => {
          this.logService.error('getMovieDetail', error);
        },
        () => {
          this.isLoadingMovie = false;
        });
  }

  /**
   * Functions
   */
  countdownTimer(): void {

    const x = setInterval(() => {

      // Get todays date and time
      const now = new Date().getTime();
      const countDownDate = new Date(this.movie.release_date);

      // Find the distance between now an the count down date
      const distance = Number(countDownDate) - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished.
      if (distance < 0) {
        clearInterval(x);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }

    }, 1000);

  }

  getMovieCrewDirecting(): void {

    this.movieCrewDirectiong = this.movie.credits.crew.filter((value) => {
      return value.department === 'Directing';
    });

  }

}
