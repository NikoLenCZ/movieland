import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
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

  getMovieDetail(id: number) {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`);
  }

}