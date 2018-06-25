import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalImageService {

  private modalSubject = new Subject<{url: string, text: string;}>();
  modalObservable = this.modalSubject.asObservable();

  constructor() { }

  showModal(imgUrl: string, text?: string): void {
    this.modalSubject.next({
      url: imgUrl,
      text: text
    });
  }
}
