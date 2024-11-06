import { PersonResponse } from "./person.model";

export interface Movie {
  adult:             boolean;
  backdrop_path:     string | null;
  genre_ids:         Genre['id'][];
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

export interface MovieDetail extends Omit<Movie, 'genre_ids'> {
  belongs_to_collection: BelongsToCollection;
  budget:                number;
  credits:               PersonResponse;
  genres:                Genre[];
  homepage:              string;
  imdb_id:               string;
  origin_country:        string[];
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  revenue:               number;
  runtime:               number;
  similar:               SimilarMovieResponse;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  videos:                VideoResponse;
  "watch/providers":     ProvidersResponse;
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

export interface SimilarMovieResponse {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface VideoResponse {
  results: Video[];
}

export interface Video {
  iso_639_1:    string;
  iso_3166_1:   string;
  name:         string;
  key:          string;
  site:         string;
  size:         number;
  type:         string;
  official:     boolean;
  published_at: string;
  id:           string;
}

export interface ProvidersResponse {
  results: Record<string, Options>;
}

export interface Options {
  link: string;
  [key: string]: Provider[] | string;
}

export type ExtractedOptions = {
  [key: string]: Provider[];
}

export interface Provider {
  logo_path:        string;
  provider_id:      number;
  provider_name:    string;
  display_priority: number;
}