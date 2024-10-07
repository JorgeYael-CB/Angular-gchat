import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";



export function setToken( req: HttpRequest<unknown>, next: HttpHandlerFn ): Observable<HttpEvent<unknown>>{
  const authService = inject(AuthService);

  if (authService.getToken()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
  }

  return next(req);
}
