import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WatchlistService } from '../../services/watchlist.service';
import { RatingService } from '../../services/rating.service';
import { map, tap } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'MovieLand';

  private watchlistService = inject(WatchlistService);
  private ratingService = inject(RatingService);

  watchlistCount$ = this.watchlistService.getWatchlist().pipe(map(watchlist => watchlist.length));

  ratedMoviesCount$ = this.ratingService.getRatedMovies().pipe(
    tap(console.log),
    map(ratedMovies => ratedMovies?.results.length || 0)
  );

  _info = this.ratedMoviesCount$.subscribe({
    next: (value) => console.log('ratedMoviesCount$', value),
    error: (error) => console.error('ratedMoviesCount$', error),
    complete: () => console.log('ratedMoviesCount$ completed'),
  })


}
