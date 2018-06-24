// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MovieDetailComponent } from './movie-detail.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabInfoComponent } from './tabs/tab-info/tab-info.component';
import { TabCastComponent } from './tabs/tab-cast/tab-cast.component';
import { TabVideosComponent } from './tabs/tab-videos/tab-videos.component';

// Pipes
import { SafePipe } from '../../shared/pipes/safe.pipe';

const APP_ROUTES: Routes = [
  {
    path: ':id',
    component: MovieDetailComponent
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
  ],
  declarations: [
    SafePipe,
    MovieDetailComponent,
    TabsComponent,
    TabInfoComponent,
    TabCastComponent,
    TabVideosComponent
  ]
})
export class MovieDetailModule { }
