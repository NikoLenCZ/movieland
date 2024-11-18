import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

  export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
    const toastr = inject(ToastrService);

    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(!error.url?.includes('/rated/') && error.error.status_code !== 34) {
          toastr.error(`The error status code is ${error.status}.`);
        }
        return throwError(() => error);
      })
    );
  };
