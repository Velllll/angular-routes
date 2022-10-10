import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormCanDeactivate } from './form-guard.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<FormCanDeactivate> {
  canDeactivate(
    component: FormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!component.productForm.dirty) {
      return of(true);
    } else {
      component.modalState.next(true)
      return component.leavePage
    }
  }
  
}
