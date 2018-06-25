import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Services
import { SearchService } from '../../../../shared/services/search.service';

// Models
import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'mc-input-search',
  template: `
    <div class="autocomplete">
      <input class="form-control" type="text" name="search"
             placeholder="Buscar por filmes..." aria-label="Search"
             [formControl]="queryField"
             (keydown)="inputKeyDown($event)" (blur)="inputBlur($event)"
      >
      <div class="autocomplete-items" #autocompleteList
           *ngIf="movieResults.length > 0 && showList">
        <div *ngFor="let movie of movieResults"
             (click)="clickOnItem($event, movie)"
        >
          {{movie.title || movie.original_title}}
          <input [value]="movie" type="hidden">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit, OnDestroy {

  @ViewChild('autocompleteList') autocompleteList: ElementRef;

  queryField: FormControl = new FormControl();

  movieResults: Array<Movie> = [];
  movieSelected: Movie;

  showLoader: boolean = false;
  showList: boolean = false;
  currentFocus: number = -1;

  subscription: Subscription;

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {

    this.subscription = this.queryField.valueChanges
      .pipe(
        debounceTime(350),
        distinctUntilChanged(),
      )
      .subscribe(queryField => {
        if (!queryField) { return; }
        this.showLoader = true;
        this.searchService.searchMovie(queryField)
          .subscribe(response => {
            this.movieResults = response.results;
            this.showList = false;
            if (this.movieResults.length) { this.showList = true; }
          });
      });
  }

  ngOnDestroy() {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  inputBlur(e): void {
    setTimeout(() => {
      this.showList = false;
      this.movieResults = [];
      this.currentFocus = -1;
      this.queryField.setValue('');
    }, 120);
  }

  inputKeyDown(e: KeyboardEvent): void {
    if (this.movieResults.length === 0 && !this.showList) { return; }
    let x = this.autocompleteList.nativeElement;
    if (x) { x = x.getElementsByTagName('div'); }
    if (e.keyCode === 40) {
      this.currentFocus++;
      this.addActive(x);
    } else if (e.keyCode == 38) {
      this.currentFocus--;
      this.addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (this.currentFocus > -1) {
        if (x) {
          x[this.currentFocus].click();
          this.showList = false;
          this.movieResults = [];
        }
      }
    }
  }

  clickOnItem(e: MouseEvent, movie: Movie): void {
    this.showList = false;
    this.movieSelected = movie;
    this.currentFocus = -1;
    this.queryField.setValue('');
    this.router.navigate(['/home/movie-detail', movie.id]);
  }

  addActive(x): void {
    if (!x) { return; }
    this.removeActive(x);
    if (this.currentFocus >= x.length) { this.currentFocus = 0; }
    if (this.currentFocus < 0) { this.currentFocus = (x.length - 1); }
    x[this.currentFocus].classList.add('autocomplete-active');
  }

  removeActive(x): void {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }


}
