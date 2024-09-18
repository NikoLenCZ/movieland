import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export const interceptApiKey: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const apiKey = environment.API_KEY;

  const modifiedReq = req.clone({
    params: req.params.set('api_key', apiKey)
  });

  return next(modifiedReq);
}
