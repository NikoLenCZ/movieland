import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingService } from '../../services/rating.service';
import { ButtonComponent } from '../../components/button/button.component';
import { RateComponent } from '../../components/rate/rate.component';
import { RatingComponent } from '../../components/rating/rating.component';

@Component({
  selector: 'app-rated-movies',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RateComponent,
    RatingComponent
  ],
  templateUrl: './rated-movies.component.html',
  styleUrl: './rated-movies.component.scss'
})
export class RatedMoviesComponent {

  private ratingService = inject(RatingService);

  ratedMovies$ = this.ratingService.getRatedMovies();


}
