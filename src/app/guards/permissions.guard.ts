import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../home/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivateChild {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.hasPermissinos().pipe(
      map(state => state || this.router.createUrlTree(['admin']))
    )
  }

}
