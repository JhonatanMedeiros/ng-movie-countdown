// Angular Imports
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Models
import { IMovieImage, Movie } from '../../../../shared/models/movie';

// Service
import { MoviesService } from '../../../../shared/services/movies.service';
import { ModalImageService } from '../../../../shared/components/modal-image/modal-image.service';

// Env
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'mc-tab-photos',
  templateUrl: './tab-photos.component.html',
  styleUrls: ['./tab-photos.component.scss']
})
export class TabPhotosComponent implements OnInit, OnDestroy {

  @Input('movie') movie: Movie = undefined;

  imgPosterUrl: string = environment.imgSizesUrl.poster_sizes.w342;

  subscription: Subscription;

  constructor(
    private movieService: MoviesService,
    private modalImage: ModalImageService
  ) { }

  ngOnInit() {
    this.getMovieImages();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getMovieImages(): void {
    this.subscription = this.movieService.getMovieImages(this.movie.id)
      .subscribe(
        res => {
          this.movie.images = res;
        }
      );
  }

  viewImage(image: IMovieImage): void {
    if (!image.file_path) {
      return;
    }
    this.modalImage.showModal(image.file_path);

  }

}
