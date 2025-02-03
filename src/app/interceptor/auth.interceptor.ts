import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let relativePath = new URL(req.url).pathname;

  let existsLogin = localStorage.getItem('sessionIdUser') != undefined
    && localStorage.getItem('sessionIdUser') != null
    && localStorage.getItem('sessionIdUser') != 'undefined';

  if (!existsLogin && relativePath != '/user/login') {
    let router = inject(Router);

    router.navigate(['user/login']);

    return of();
  }

  return next(req);
};
