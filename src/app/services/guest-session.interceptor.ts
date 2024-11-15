import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { GuestSessionService } from './guest-session.service';

export const interceptGuestSession: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  if (req.url.includes('/rating') || req.url.includes('{guestSessionIdPlaceholder}')) {

    const guestSessionService = inject(GuestSessionService);


    return guestSessionService.getGuestSessionId().pipe(
      switchMap(guestSessionId => {
        if(req.url.includes('{guestSessionIdPlaceholder}')) {
          const modifiedReq = req.clone({
            url: req.url.replace('{guestSessionIdPlaceholder}', guestSessionId!)
          });
          return next(modifiedReq)
        } else {
          const modifiedReq = req.clone({
            params: req.params.set('guest_session_id', guestSessionId!)
        });
          return next(modifiedReq)
        }
      })
    )
  }
  else {
    return next(req)
  }

}
