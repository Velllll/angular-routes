import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, catchError, EMPTY } from 'rxjs';
import { IPost } from '../pages/posts/posts.component';
import { User } from '../pages/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private urlUser = 'https://jsonplaceholder.typicode.com/users/'

  private urlPosts = 'https://jsonplaceholder.typicode.com/posts'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUser(id: number) {
    return this.http.get<User>(this.urlUser + id).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate([''])
        return EMPTY
      })
      )
  }

  getPosts() {
    return this.http.get<IPost[]>(this.urlPosts).pipe(
      catchError(() => {
        return EMPTY
      })
    )
  }
}
