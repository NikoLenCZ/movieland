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
  readonly limitSimilar = 10;
  showAllSimilar = false;

  get displayedSimilarMovies() {
    return this.showAllSimilar ? this.similarMovies : this.similarMovies.slice(0, this.limitSimilar);
  }

  showMore() {
    this.showAllSimilar = true;
  }

  showLess() {
    this.showAllSimilar = false;
  }

}
