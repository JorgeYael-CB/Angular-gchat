import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";


export function handle401Interceptor( req: HttpRequest<unknown>, next: HttpHandlerFn ): Observable<HttpEvent<unknown>>{
  const authService = inject(AuthService);
  const router = inject(Router);


  return next(req)
    .pipe(
      tap({
        error: (err) => {
          if( err.status && err.status === 401 ){
            authService.logout();
            router.navigate(['/login']);
          }
        }
      })
    )
}
