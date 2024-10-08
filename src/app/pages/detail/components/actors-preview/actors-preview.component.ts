import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonResponse } from '../../../../models/person.model';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-actors-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './actors-preview.component.html',
  styleUrl: './actors-preview.component.scss'
})
export class ActorsPreviewComponent {
  @Input() person: any;
  showCount = 10;

  get displayedActors() {
    return this.person.cast.slice(0, this.showCount);
  }

  showMore(): void {
    this.showCount = this.person.cast.length;
  }

  showLess(): void {
    this.showCount = 10;
  }
}