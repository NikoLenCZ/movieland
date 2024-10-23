import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDetail } from '../models/movie.model';
import { ListResponse } from '../models/list-response.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient);

  getNowPlayingMovies() {
    return this.http.get<ListResponse<Movie>>(`https://api.themoviedb.org/3/movie/now_playing`);
  }

  getUpcomingMovies() {
    return this.http.get<ListResponse<Movie>>(`https://api.themoviedb.org/3/movie/upcoming`);
  }

  getPopularMovies() {
    return this.http.get<ListResponse<Movie>>(`https://api.themoviedb.org/3/movie/popular`);
  }

  getMovieDetail(id: MovieDetail['id']) {
    return this.http.get<MovieDetail>(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,similar`);
  }

}