import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonResponse } from '../models/person.model';
import { MovieDetail } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  http = inject(HttpClient);

  getPerson(id: MovieDetail['id']) {
    return this.http.get<PersonResponse>(`https://api.themoviedb.org/3/movie/${id}/credits`);
  }

}