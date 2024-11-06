import { Component, Input } from '@angular/core';
import { Actor, Crew, Person } from '../../../../models/person.model';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button.component';
import { WrapperListComponent } from '../../../../components/wrapper-list/wrapper-list.component';

@Component({
  selector: 'app-persons-preview',
  standalone: true,
  imports:[
    CommonModule,
    ButtonComponent,
    WrapperListComponent
  ],
  templateUrl: './persons-preview.component.html',
  styleUrl: './persons-preview.component.scss'
})
export class PersonsPreviewComponent<T extends Person> {

  @Input() persons!: T[];

  readonly limitPersons = 12;
  showedAllPersons = false;

  get displayedPersons() {
    return this.showedAllPersons ? this.persons : this.persons.slice(0, this.limitPersons);
  }

  isActor(person: T): person is Extract<T, Actor> {
    return 'cast_id' in person;
  }

  isCrew(person: T): person is Extract<T, Crew> {
    return !('cast_id' in person);
  }

  showMore(): void {
    this.showedAllPersons = true;
  }

  showLess(): void {
    this.showedAllPersons = false;
  }

}
