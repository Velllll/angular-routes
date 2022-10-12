import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string
}

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {
  users$!: Observable<User[]> 

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
