import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';



export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap( isLogged => {
        if( !isLogged ) router.navigate(['/login']);
      }),
      map(isAuthenticated => isAuthenticated as boolean)
    );
};
