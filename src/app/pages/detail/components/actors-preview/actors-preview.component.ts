import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonResponse } from '../../../../models/person.model';

@Component({
  selector: 'app-actors-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actors-preview.component.html',
  styleUrl: './actors-preview.component.scss'
})
export class ActorsPreviewComponent {

  @Input() person!: PersonResponse;

}
