import { CanActivateFn } from '@angular/router';



export const notLoggedGuard: CanActivateFn = (route, state) => {
  return true;
};
