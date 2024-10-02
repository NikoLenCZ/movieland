import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { ActorsPreviewComponent } from './components/actors-preview/actors-preview.component';
import { CrewPreviewComponent } from './components/crew-preview/crew-preview.component';
import { SimilarPreviewComponent } from './components/similar-preview/similar-preview.component';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    MoviePreviewComponent,
    ActorsPreviewComponent,
    CrewPreviewComponent,
    SimilarPreviewComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  private movieService = inject(MoviesService);
  private personService = inject(PersonService);
  private route = inject(ActivatedRoute);

  movie$ = this.movieService.getMovieDetail(this.route.snapshot.params['id']);
  person$ = this.personService.getPerson(this.route.snapshot.params['id']);
  similarMovies$ = this.movieService.getSimilarMovies(this.route.snapshot.params['id']);
}
