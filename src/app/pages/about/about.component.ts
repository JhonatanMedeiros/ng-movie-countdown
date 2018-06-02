import { Component, OnInit } from '@angular/core';

// Exteral Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

@Component({
  selector: 'mc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.breadcrumbService.addFriendlyNameForRouteRegex('/about', 'Sobre');
  }

}
