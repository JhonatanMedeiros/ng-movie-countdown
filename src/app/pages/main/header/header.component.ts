import { Component, OnInit } from '@angular/core';

// External Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.configureBreadCrumb();
  }

  /**
   * Functions
   */
  configureBreadCrumb(): void {

    // Base Router
    this.breadcrumbService.addFriendlyNameForRoute('/home', 'Inicio');
    this.breadcrumbService.addFriendlyNameForRoute('/about', 'Sobre');
    this.breadcrumbService.addFriendlyNameForRoute('/movie-popular', 'Filmes Populares');

    // Movie Router
    // this.breadcrumbService.addFriendlyNameForRoute('/movie-detail', 'Detalhe do Filme');
    this.breadcrumbService.hideRoute('/home/movie-detail');
  }

}
