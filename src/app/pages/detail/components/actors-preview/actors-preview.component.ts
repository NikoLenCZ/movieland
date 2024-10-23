import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actor } from '../../../../models/person.model';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-actors-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './actors-preview.component.html',
  styleUrl: './actors-preview.component.scss'
})
export class ActorsPreviewComponent {
  @Input() person!: Actor[];
  showCount = 10;

  get displayedActors() {
    return this.person.slice(0, this.showCount);
  }

  showMore(): void {
    this.showCount = this.person.length;
  }

  showLess(): void {
    this.showCount = 10;
  }
}