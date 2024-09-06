import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(tap(
    (event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Xử lý khi nhận được HttpResponse
      }
    },
    (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // Xử lý khi nhận được lỗi 401 Unauthorized
        }
      }
    }
  )
);
};
