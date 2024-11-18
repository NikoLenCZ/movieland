import { inject, Injectable} from '@angular/core';
import { MovieDetail } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private toastr = inject(ToastrService);
  private watchlistSubject = new BehaviorSubject<MovieDetail['id'][]>(JSON.parse(localStorage.getItem('watchlist') || '[]'));

  getWatchlist(): Observable<MovieDetail['id'][]> {
    return this.watchlistSubject.asObservable();
  }

  isInWatchlist(movieId: MovieDetail['id']): Observable<boolean> {
    return this.watchlistSubject.pipe(
      map(watchlist => watchlist.includes(movieId))
    );
  }

  addToWatchlist(movieId: MovieDetail['id']): void {
    let currentWatchlist = this.watchlistSubject.value;
    if (!currentWatchlist.includes(movieId)) {
      currentWatchlist = [...currentWatchlist, movieId];
      localStorage.setItem('watchlist', JSON.stringify(currentWatchlist));
      this.watchlistSubject.next(currentWatchlist);
      this.toastr.success(`Movie with id ${movieId} added to watchlist`);
    }
  }

  removeFromWatchlist(movieId: MovieDetail['id']): void {
    let currentWatchlist = this.watchlistSubject.value;
    const index = currentWatchlist.indexOf(movieId);
    if (index > -1) {
      currentWatchlist = currentWatchlist.filter(id => id !== movieId);
      localStorage.setItem('watchlist', JSON.stringify(currentWatchlist));
      this.watchlistSubject.next(currentWatchlist);
      this.toastr.warning(`Movie with id ${movieId} removed from watchlist`);
    }
  }

}