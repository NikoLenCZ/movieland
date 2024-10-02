import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimilarMovieResponse } from '../../../../models/movie.model';

@Component({
  selector: 'app-similar-preview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './similar-preview.component.html',
  styleUrl: './similar-preview.component.scss'
})
export class SimilarPreviewComponent {
  @Input() similarMovies!: SimilarMovieResponse;
}
