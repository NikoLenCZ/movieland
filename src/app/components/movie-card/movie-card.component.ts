import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MovieDetail } from '../../models/movie.model';
import { RouterModule } from '@angular/router';
import { RateComponent } from '../rate/rate.component';
import { ButtonComponent } from '../button/button.component';
import { map, Observable, of, startWith, take } from 'rxjs';
import { tap } from 'rxjs';
import { WatchlistService } from '../../services/watchlist.service';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RateComponent,
    ButtonComponent
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie!: Movie;

  watchlistService = inject(WatchlistService);

  isInWatchlist$ = of(false);

  ngOnInit() {
    this.isInWatchlist$ = this.watchlistService.isInWatchlist(this.movie.id).pipe(
      startWith(false)
    );
}

  toggleWatchlist(movie: Movie) {
    this.watchlistService.isInWatchlist(movie.id).pipe(
      take(1),
      tap(isInWatchlist => {
        if (isInWatchlist) {
          this.watchlistService.removeFromWatchlist(movie.id);
        } else {
          this.watchlistService.addToWatchlist(movie.id);
        }
      })
    ).subscribe();
  }

}
