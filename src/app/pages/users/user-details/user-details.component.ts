import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from '../user-sidebar/user-sidebar.component';

export interface UserDetailst extends User {
  username: string;
  phone: string;
  website: string
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails$!: Observable<UserDetailst> 

  constructor(
    private aRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.userDetails$ = this.aRoute.params.pipe(
      switchMap(param => {
        const id = param['id']
        return this.http.get<UserDetailst>('https://jsonplaceholder.typicode.com/users/' + id)
      })
    )
  }

}
