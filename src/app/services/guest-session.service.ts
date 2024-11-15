import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GuestSessionResponse } from '../models/session-response.model';
import { map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestSessionService {

  http = inject(HttpClient);

 guestSessionId = this.http.get<GuestSessionResponse>(`https://api.themoviedb.org/3/authentication/guest_session/new`).pipe(
    map(response => response.guest_session_id),
    shareReplay(1),
  );

  getGuestSessionId() {
    return this.guestSessionId
   }


}