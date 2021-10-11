import { AuthService } from './core/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';//tap permite hacer debug haciendo una intercepcion al flujo de data
import { map,tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      map(user=>user===null?false:true),//si no hay user no se activa el guard
      tap(hasUser=>{
        if (!hasUser){
          this.router.navigate(['/auth/login'])
        } //si no existe el usuario redirecciono al login

      }),

      );
  }

}
