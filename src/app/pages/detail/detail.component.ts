import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { ActorsPreviewComponent } from './components/actors-preview/actors-preview.component';
import { CrewPreviewComponent } from './components/crew-preview/crew-preview.component';
import { SimilarPreviewComponent } from './components/similar-preview/similar-preview.component';
import { WatchlistService } from '../../services/watchlist.service';
import { ButtonComponent } from '../../components/button/button.component';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, tap } from 'rxjs';
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
  private personService = inject(PersonService);
  private route = inject(ActivatedRoute);
  private toastr = inject(ToastrService);
  watchlistService = inject(WatchlistService);

  loading = true;

  movieId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')!)),
    tap(() => {
      window.scrollTo(0, 0);
      this.loading = true;
      console.log('loading', this.loading);
    })
  );

  movie$ = this.movieId$.pipe(
    switchMap(movieId => this.movieService.getMovieDetail(movieId)),
    tap(() => {
      this.loading = false;
      console.log('loading', this.loading);
    })
  );

  person$ = this.movieId$.pipe(
    switchMap(movieId => this.personService.getPerson(movieId)),
    tap(() => {
      this.loading = false;
    })
  );

  similarMovies$ = this.movieId$.pipe(
    switchMap(movieId => this.movieService.getSimilarMovies(movieId)),
    tap(() => {
      this.loading = false;
    })
  );

  toggleWatchlist(movieId: MovieDetail['id']) {
    if (this.watchlistService.isInWatchlist(movieId)) {
      this.watchlistService.removeFromWatchlist(movieId);
      this.toastr.warning('Removed from watchlist');
    } else {
      this.watchlistService.addToWatchlist(movieId);
      this.toastr.success('Added to watchlist');
    }
  }

}
