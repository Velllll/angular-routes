import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return of(false).pipe(delay(500))
  }
}
