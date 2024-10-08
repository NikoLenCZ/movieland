import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetail } from '../../../../models/movie.model';
import { RateComponent } from '../../../../components/rate/rate.component';
@Component({
  selector: 'app-movie-preview',
  standalone: true,
  imports: [CommonModule, RateComponent],
  templateUrl: './movie-preview.component.html',
  styleUrl: './movie-preview.component.scss'
})
export class MoviePreviewComponent {
  @Input() movieDetail!: MovieDetail;

  formatRuntime(runtime: number): string {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours} h ${minutes} m`;
  }

}
