import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
  id: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$!: Observable<User[]> 

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  openDetails(id: number) {
    this.router.navigate(['users/' + id])
  }

}
