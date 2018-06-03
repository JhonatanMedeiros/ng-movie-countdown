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

  // Countdown Timer
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private imgUrl: string = 'https://image.tmdb.org/t/p/w780/';

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private titleService: Title
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

    this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-detail/[0-9]', 'Carregando Filme...');

    this.movieService.getMovieDetais(movieId)
      .subscribe(
        res => {
          this.movie = res;
          this.breadcrumbService.addFriendlyNameForRouteRegex('/movie-detail/[0-9]', this.movie.title);
          this.titleService.setTitle(this.movie.title || this.movie.original_title);
          this.countdownTimer();
        },
        error => {
          console.log(error);
        });

  }

  /**
   * Functions
   */
  countdownTimer(): void {

    let x = setInterval(() => {

      // Get todays date and time
      let now = new Date().getTime();
      let countDownDate = new Date(this.movie.release_date);

      // Find the distance between now an the count down date
      let distance = Number(countDownDate) - now;

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

}
