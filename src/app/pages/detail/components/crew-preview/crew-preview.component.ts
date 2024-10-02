import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonResponse } from '../../../../models/person.model';

@Component({
  selector: 'app-crew-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crew-preview.component.html',
  styleUrl: './crew-preview.component.scss'
})
export class CrewPreviewComponent {

  @Input() person!: PersonResponse;

}
