import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../../models/movie.model';
import { WrapperListComponent } from '../../../../components/wrapper-list/wrapper-list.component';
import { MovieCardComponent } from '../../../../components/movie-card/movie-card.component';
import { ButtonComponent } from '../../../../components/button/button.component';
@Component({
  selector: 'app-similar-preview',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    WrapperListComponent,
    ButtonComponent
  ],
  templateUrl: './similar-preview.component.html',
  styleUrl: './similar-preview.component.scss'
})
export class SimilarPreviewComponent {
  @Input() similarMovies!: Movie[];
  movieLimit = 10;

  showMore() {
    this.movieLimit += 10;
    if (this.movieLimit > this.similarMovies.length) {
      this.movieLimit = this.similarMovies.length;
    }
  }

  showLess() {
    this.movieLimit -= 10;
    if (this.movieLimit < 10) {
      this.movieLimit = 10;
    }
  }

}
