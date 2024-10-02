export interface Movie {
  adult:             boolean;
  backdrop_path:     string | null;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface MovieDetail {
  adult:                 boolean;
  backdrop_path:         string | null;
  belongs_to_collection: BelongsToCollection;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  origin_country:        string[];
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface BelongsToCollection {
  id:            number;
  name:          string;
  poster_path:   string;
  backdrop_path: string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}


export interface RecommendationMovieResponse {
  page: number;
  results: RecommendationMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface RecommendationMovieResult {
  backdrop_path:     string | null;
  id:                number;
  title:             string;
  original_title:    string;
  overview:          string;
  poster_path:       string;
  media_type:        string;
  adult:             boolean;
  original_language: string;
  genre_ids:         number[];
  popularity:        number;
  release_date:      Date;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface SimilarMovieResponse {
  page:          number;
  results:       SimilarMovieResult[];
  total_pages:   number;
  total_results: number;
}

export interface SimilarMovieResult {
  adult:             boolean;
  backdrop_path:     string | null;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}
