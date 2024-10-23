import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crew } from '../../../../models/person.model';
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

  @Input() person!: Crew[];

  get displayedCrew() {
    return this.person.slice(0, this.showCount);
  }

  showMore(): void {
    this.showCount = this.person.length;
  }

  showLess(): void {
    this.showCount = 10;
  }
}
