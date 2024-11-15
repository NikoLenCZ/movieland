export interface RatingResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface RatedMoviesResponse {
  page:          number;
  results:       RatedMoviesResult[];
  total_pages:   number;
  total_results: number;
}

export interface RatedMoviesResult {
  adult:             boolean;
  backdrop_path:     string;
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
  rating:            number;
}

