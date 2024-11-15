import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { RatedMoviesComponent } from './pages/rated-movies/rated-movies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'rated-movies', component: RatedMoviesComponent },
];
