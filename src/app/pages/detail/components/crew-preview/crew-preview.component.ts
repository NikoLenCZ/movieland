import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonResponse } from '../../../../models/person.model';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-crew-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './crew-preview.component.html',
  styleUrl: './crew-preview.component.scss'
})
export class CrewPreviewComponent {
  showCount = 10;

  @Input() person!: PersonResponse;

  get displayedCrew() {
    return this.person.crew.slice(0, this.showCount);
  }

  showMore(): void {
    this.showCount = this.person.crew.length;
  }

  showLess(): void {
    this.showCount = 10;
  }
}
