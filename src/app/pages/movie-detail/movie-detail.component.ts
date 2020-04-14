import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// Services
import { MoviesService } from '../../shared/services/movies.service';
import { LogService } from '../../shared/services/local/log.service';

// Models
import { EnumMovieStatus, ICastProfile, Movie } from '../../shared/models/movie';

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
  showCountDown: boolean = true;

  imgUrl: string = environment.imgSizesUrl.poster_sizes.w342;

  isLoadingMovie: boolean = false;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private titleService: Title,
    private logService: LogService
  ) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      const movieId: number = Number(params['id']);
      this.getMovieDetail(movieId);
    });
  }

  /**
   * Services
   */
  getMovieDetail(movieId: number): void {

    this.isLoadingMovie = true;

    this.movieService.getMovieDetails(movieId)
      .subscribe(
        res => {
          this.movie = res;
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

    if (this.movie.status === EnumMovieStatus.Released) {
      this.showCountDown = false;
      return;
    }

    this.movie.release_date = this.formatDate(this.movie.release_date);

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

  formatDate(date): string {
    let d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  getMovieCrewDirecting(): void {

    this.movieCrewDirectiong = this.movie.credits.crew.filter((value) => {
      return value.department === 'Directing';
    });

  }

}
