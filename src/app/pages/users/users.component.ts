import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, delay, EMPTY, map, Observable, switchMap } from 'rxjs';
import { GetDataService } from 'src/app/service/get-data.service';

export interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user$!: Observable<User>

  constructor(
    private aRouter: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    this.user$ = this.aRouter.data.pipe(
      map(data => data["user"])
    )
  }

}
