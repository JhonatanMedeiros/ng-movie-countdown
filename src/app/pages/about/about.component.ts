import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Exteral Libs
import { BreadcrumbService } from 'ng5-breadcrumb';

@Component({
  selector: 'mc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Sobre');
    this.breadcrumbService.addFriendlyNameForRouteRegex('/about', 'Sobre');
  }

}
