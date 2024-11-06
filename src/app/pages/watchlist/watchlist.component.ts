import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistService } from '../../services/watchlist.service';
import { MoviesService } from '../../services/movies.service';
import { BehaviorSubject, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { Options, ExtractedOptions, Provider, MovieDetail } from '../../models/movie.model';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    DropdownComponent
  ],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent {

  private router = inject(Router);
  private watchlistService = inject(WatchlistService);
  private moviesService = inject(MoviesService);
  private providersService = inject(ProvidersService);

  movieDetails$ = this.watchlistService.getWatchlist().pipe(
    switchMap(ids => {
      const movieRequests = ids.map(id => this.moviesService.getMovieDetail(id));
      return movieRequests.length > 0 ? forkJoin(movieRequests) : of([]);
    }),
  );

  private streamVisibility: { [id: number]: BehaviorSubject<boolean> } = {};

  selectedRegion$ = this.providersService.selectedRegion$;

  isStreamVisible(id: number): BehaviorSubject<boolean> {
    if (!this.streamVisibility[id]) {
      this.streamVisibility[id] = new BehaviorSubject<boolean>(false);
    }
    return this.streamVisibility[id];
  }

  toggleStreamVisibility(id: number) {
    const isVisible = this.isStreamVisible(id);
    isVisible.next(!isVisible.value);
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }

  removeFromWatchlist(id: number) {
    this.watchlistService.removeFromWatchlist(id);
  }

  hasProviders(movie: MovieDetail): boolean {
    return Object.keys(movie['watch/providers'].results).length > 0;
  }

  getProviders(providers: Options): ExtractedOptions {
    return Object.fromEntries(Object.entries(providers).filter((keyValue): keyValue is [string, Provider[]] => Array.isArray(keyValue[1])));
  }

  hasProvidersSelected(movie: MovieDetail): boolean {
    return this.selectedRegion$.value === null || this.selectedRegion$.value in movie['watch/providers'].results;
  }

  selectedRegion(region: string): boolean {
    return this.selectedRegion$.value === region || this.selectedRegion$.value === null;
  }

}
