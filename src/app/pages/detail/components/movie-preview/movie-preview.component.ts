import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetail } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-preview.component.html',
  styleUrl: './movie-preview.component.scss'
})
export class MoviePreviewComponent {
  @Input() movieDetail!: MovieDetail;


}
