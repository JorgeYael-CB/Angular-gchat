import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthState } from '../interfaces/store/Auth.state';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';



export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authStore: Store<{ auth: IAuthState }> = inject(Store<{ auth: IAuthState }>);
  const router = inject(Router);

  return authStore.select(state => state.auth.isLogged).pipe(
    map(isLogged => {
      if( isLogged ){
        return true;
      }
      router.navigate(['/login']);
      return false;
    })
  );
};
