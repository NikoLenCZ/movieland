import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { ActorsPreviewComponent } from './components/actors-preview/actors-preview.component';
import { CrewPreviewComponent } from './components/crew-preview/crew-preview.component';
import { SimilarPreviewComponent } from './components/similar-preview/similar-preview.component';
import { WatchlistService } from '../../services/watchlist.service';
import { ButtonComponent } from '../../components/button/button.component';
import { combineLatest, map, Observable, skip, startWith, switchMap, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MovieDetail } from '../../models/movie.model';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    MoviePreviewComponent,
    ActorsPreviewComponent,
    CrewPreviewComponent,
    SimilarPreviewComponent,
    ButtonComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  private movieService = inject(MoviesService);
  private route = inject(ActivatedRoute);
  private watchlistService = inject(WatchlistService);

  constructor() {
    this.route.paramMap.pipe(skip(1), takeUntilDestroyed()).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  movie$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')!)),
    switchMap(movieId => combineLatest([this.movieService.getMovieDetail(movieId), this.watchlistService.isInWatchlist(movieId)]).pipe(
      map(([movieDetail, isInWatchlist]) => ({movieDetail, isInWatchlist})),
      startWith(null)))
  );

  toggleWatchlist(movieId: MovieDetail['id']) {
    this.watchlistService.isInWatchlist(movieId).pipe(
      take(1),
      tap(isInWatchlist => {
        if (isInWatchlist) {
          this.watchlistService.removeFromWatchlist(movieId);
        } else {
          this.watchlistService.addToWatchlist(movieId);
        }
      })
    ).subscribe();
  }

}
