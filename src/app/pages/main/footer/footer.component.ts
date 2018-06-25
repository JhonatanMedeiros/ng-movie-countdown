import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTop(): void {
    window.scrollTo(0, 0);
  }

}
