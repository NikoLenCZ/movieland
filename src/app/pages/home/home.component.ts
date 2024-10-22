import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { SkeletonPlaceholderComponent } from '../../components/skeleton-placeholder/skeleton-placeholder.component';
import { WrapperListComponent } from '../../components/wrapper-list/wrapper-list.component';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { catchError, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TimesPipe } from './time.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieCardComponent,
    WrapperListComponent,
    CommonModule,
    SkeletonPlaceholderComponent,
    TimesPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {

  private movieService = inject(MoviesService);

  nowPlayingMovies$ = this.movieService.getNowPlayingMovies().pipe(
    map(response => response.results),
    catchError((error: HttpErrorResponse) => of(error))
  );

  upcomingMovies$ = this.movieService.getUpcomingMovies().pipe(
    map(response => response.results),
    catchError((error: HttpErrorResponse) => of(error)),
  );

  popularMovies$ = this.movieService.getPopularMovies().pipe(
    map(response => response.results),
    catchError((error: HttpErrorResponse) => of(error)),
  );

  isErrorResponse(response: Movie[] | HttpErrorResponse): response is HttpErrorResponse {
    return 'error' in response;
  }

}
