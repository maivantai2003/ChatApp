import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let jwt=req.clone({
    setHeaders:{
      Authorization:'bearer '+ localStorage.getItem('token')
    }
  })
  return next(jwt);
};
