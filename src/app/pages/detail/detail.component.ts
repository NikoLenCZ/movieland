import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  private movieService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  movie$ = this.movieService.getMovieDetail(this.route.snapshot.params['id']);

}
