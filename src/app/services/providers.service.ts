import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegionsResponse } from '../models/providers.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  http = inject(HttpClient);

  selectedRegion$ = new BehaviorSubject<string | null>(null);

  setSelectedRegion(region: string) {
    this.selectedRegion$.next(region);
  }

  getRegions() {
    return this.http.get<RegionsResponse>(`https://api.themoviedb.org/3/watch/providers/regions`);
  }

}