import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RatingResponse, RatedMoviesResponse } from '../models/rating.model';
import { Subject, switchMap, startWith, delay, catchError, of, throwError, share, shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RatingService {

  private http = inject(HttpClient);

  updateRatedMovies = new Subject<void>();

  ratedMovies$ = this.updateRatedMovies.pipe(
    delay(600),
    startWith(undefined),
    switchMap(
      () => {
        return this.http.get<RatedMoviesResponse>(`https://api.themoviedb.org/3/guest_session/{guestSessionIdPlaceholder}/rated/movies`).pipe(
          catchError((error: HttpErrorResponse) => {
            if(error.status === 404) {
              return of({results: []})
            }
            return throwError(() => error)
          })
        );
      }
    ),
    shareReplay(1),
  )

  getRatedMovies() {
    return this.ratedMovies$
  }


  sendRating(movieId: number, rating: number){
   return this.http.post<RatingResponse>(`https://api.themoviedb.org/3/movie/${movieId}/rating`,
      { value: rating / 10 },
      { headers: { 'Content-Type': 'application/json;charset=utf-8' } }
    ).subscribe(() => this.updateRatedMovies.next());
  }

  deleteRating(movieId: number) {
   return this.http.delete(`https://api.themoviedb.org/3/movie/${movieId}/rating`).subscribe(() => this.updateRatedMovies.next());
  }
}
