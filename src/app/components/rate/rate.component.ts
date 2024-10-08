import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss'
})
export class RateComponent {
  @Input() vote_average!: number;
  type!: string;

  ngOnInit() {
    this.type = this.vote_average > 7 ? 'high' : this.vote_average > 4 ? 'medium' : 'low';
  }
}
