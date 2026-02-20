import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { Authentication } from '../Services/authentication';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authenticationService = inject(Authentication);

  if (!authenticationService.isAuthenticate()) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
