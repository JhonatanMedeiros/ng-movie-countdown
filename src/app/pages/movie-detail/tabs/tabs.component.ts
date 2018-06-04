import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @ViewChild('myTabs') myTabs: ElementRef;

  tabSelected: number = 0;

  tabList: Array<string> = [
    'Informações',
    'Elenco',
    'Videos',
    'Fotos'
  ];

  constructor() { }

  ngOnInit() { }

}
