import { Component, Input, OnInit } from '@angular/core';

// Models
import { Movie } from '../../../../shared/models/movie';

// Env
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'mc-tab-cast',
  templateUrl: './tab-cast.component.html',
  styleUrls: ['./tab-cast.component.scss']
})
export class TabCastComponent implements OnInit {

  @Input('movie') movie: Movie = undefined;

  imgUrl: string = environment.imgSizesUrl.profile_sizes.w185;

  constructor() { }

  ngOnInit() {}

}
