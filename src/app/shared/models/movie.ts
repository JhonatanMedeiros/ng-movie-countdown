export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  credits?: MovieCredits;
  external_ids?: MovieExternalIDS;
  genres?: MovieGenres[];
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
  spoken_languages?: any[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  videos?: any;
  vote_count?: number;
  vote_average?: number;
}

export interface MovieCredits {
  cast?: CastProfile[];
  crew?: CastProfile[];
}

export interface CastProfile {
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

export interface MovieGenres {
  id?: number;
  name?: string;
}

export interface MovieExternalIDS {
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
}

export interface MovieResponse {
  page?: number;
  results?: Array<Movie>;
  total_results?: number;
  total_pages?: number;
}
