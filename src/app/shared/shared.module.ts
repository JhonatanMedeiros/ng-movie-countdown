// Angular Imports
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

// Services
import { MoviesService } from './services/movies.service';
import { SearchService } from './services/search.service';
import { ConfigurationService } from './services/configuration.service';
import { LogService } from './services/local/log.service';
import { PaginationConfig } from './components/pagination/pagination.config';
import { ModalImageService } from './components/modal-image/modal-image.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PaginationComponent,
    LoaderComponent,
    ModalImageComponent
  ],
  exports: [
    PaginationComponent,
    LoaderComponent,
    ModalImageComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MoviesService,
        SearchService,
        ConfigurationService,
        LogService,
        PaginationConfig,
        ModalImageService
      ]
    };
  }
}
