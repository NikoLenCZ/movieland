import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDetail } from '../models/movie.model';
import { ListResponse } from '../models/list-response.model';
import { map } from 'rxjs';
import { Crew } from '../models/person.model';

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
    return this.http.get<MovieDetail>(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,similar,videos,watch/providers`)
      .pipe(
        map((detail: MovieDetail) => {
          if (detail.credits && detail.credits.crew) {
          const uniqueCrew = detail.credits.crew.reduce((acc: Crew[], current: Crew) => {
            const found = acc.find(item => item.id === current.id);
            if (found) {
              found.job += `, ${current.job}`;
            } else {
              acc.push(current);
            }
              return acc;
            }, []);
            detail.credits.crew = uniqueCrew;
          }
          return detail;
        })
      );
  }

}