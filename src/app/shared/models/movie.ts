import { IConfigLanguages } from './config-languages';
import { ConfigurationService } from '../services/configuration.service';

export class Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  credits?: IMovieCredits;
  external_ids?: IMovieExternalIDS;
  genres?: IMovieGenres[];
  genre_ids?: Array<number>;
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: any[];
  production_countries?: any[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Array<ISpokenLanguages>;
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  videos?: any;
  vote_count?: number;
  vote_average?: number;

  public constructor(
    private values: Object = {},
    private configService: ConfigurationService
  ) {
    Object.assign(this, values);
    this.getLanguages();
  }

  private getLanguages(): void {
    this.configService.getLanguages()
      .subscribe(
        res => {
          this.setLanguage(res);
        }
      );
  }

  private setLanguage(lang: IConfigLanguages[]): void {
    const index = lang.findIndex(value => value.iso_639_1 === this.original_language);
    if (index > -1) {
      this.original_language = lang[index].name;
    }
  }

}

export interface IMovieCredits {
  cast?: ICastProfile[];
  crew?: ICastProfile[];
}

export interface ICastProfile {
  credit_id?: number;
  cast_id?: number;
  character?: string;
  gender?: number;
  id?: number;
  name?: string;
  order?: number;
  profile_path?: string;
  job?: string;
  department?: string;
}

export interface IMovieGenres {
  id?: number;
  name?: string;
}

export interface IMovieExternalIDS {
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
}

export interface IMovieResponse {
  page?: number;
  results?: Array<Movie>;
  total_results?: number;
  total_pages?: number;
}

export interface ISpokenLanguages {
  iso_639_1?: string;
  name?: string;
  english_name?: string;
}

export enum EnumMovieStatus {
  Rumored = 'Rumored',
  Planned = 'Planned',
  InProduction = 'In Production',
  PostProduction = 'Post Production',
  Released = 'Released',
  Canceled = 'Canceled'
}
