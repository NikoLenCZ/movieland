import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { RatingService } from '../../services/rating.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})

export class RatingComponent {

  private ratingService = inject(RatingService);

  @Input() movieId!: number;
  @Input() textButton: string = 'Send rating';

  rating?: number;

  sendRating(movieId: number) {
    console.log('sendRating', movieId, this.rating);
    if (this.rating === undefined) {
      console.error('rating is not set');
      return;
    }
    this.ratingService.sendRating(movieId, this.rating);
  }

  deleteRating(movieId: number) {
    console.log('deleteRating', movieId);
    this.ratingService.deleteRating(movieId);
  }

}
