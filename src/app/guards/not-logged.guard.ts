import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAuthState } from '../interfaces/store/Auth.state';



export const notLoggedGuard: CanActivateFn = (route, state) => {
  const authStore: Store<{ auth: IAuthState }> = inject(Store<{ auth: IAuthState }>);
  const router = inject(Router);

  return authStore.select(state => state.auth.isLogged).pipe(
    map(isLogged => {
      if( !isLogged ){
        return true;
      }
      router.navigate(['/']);
      return false;
    })
  );
};
