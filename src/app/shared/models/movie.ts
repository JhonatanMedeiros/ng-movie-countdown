export interface Movie {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: Array<number>;
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  videos?: any;
  credits: MovieCredits;
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

export interface MovieResponse {
  page?: number;
  results?: Array<Movie>;
  total_results?: number;
  total_pages?: number;
}
