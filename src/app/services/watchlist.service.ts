import { Injectable } from '@angular/core';
import { MovieDetail } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor() { }

  private watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

  addToWatchlist(movieId: MovieDetail['id']): void {
    if (!this.watchlist.includes(movieId)) {
      this.watchlist.push(movieId);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
      console.log('watchlist', this.watchlist);
    }
  }

  isInWatchlist(movieId: MovieDetail['id']): boolean {
    return this.watchlist.includes(movieId);
  }

  removeFromWatchlist(movieId: MovieDetail['id']): void {
    const index = this.watchlist.indexOf(movieId);
    if (index > -1) {
      this.watchlist.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
      console.log('watchlist', this.watchlist);
    }
  }

  getWatchlist(): string[] {
    return this.watchlist;
  }
}