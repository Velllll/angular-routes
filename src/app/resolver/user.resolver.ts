import { Injectable } from '@angular/core';
import { catchError, delay, EMPTY, switchMap } from 'rxjs';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../pages/users/users.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  url = 'https://jsonplaceholder.typicode.com/users/'

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.http.get<User>(this.url + route.params?.["id"]).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate([''])
        return EMPTY
      })
    )
  }
}
