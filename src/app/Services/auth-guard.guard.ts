import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const jwt_token = localStorage.getItem("token");
  const router = inject(Router);

  if (jwt_token !== null) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
