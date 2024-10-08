import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { RouterModule } from '@angular/router';
import { RateComponent } from '../rate/rate.component';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule, RateComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() movie!: Movie;

}
