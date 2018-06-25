// Angular Imports
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { ModalImageService } from './modal-image.service';

// Env
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mc-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit, OnDestroy {

  isOpen: boolean = false;
  imgUrl: string = '';
  imgText: string = '';

  imgSizeUrl: string = environment.imgSizesUrl.poster_sizes.w780;

  subscription: Subscription;

  constructor(
    private modalImgService: ModalImageService
  ) { }

  ngOnInit() {
    this.subscription = this.modalImgService.modalObservable
      .subscribe(
        response => {
          this.isOpen = true;
          this.imgUrl = this.imgSizeUrl + response.url;
          this.imgText = response.text;
        }
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  close(): void {
    this.isOpen = false;
  }

}
