import { HttpInterceptorFn } from '@angular/common/http';

export const httpTokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
