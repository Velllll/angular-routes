import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, mapTo, merge, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean>
  private showLoader$!: Observable<boolean>
  private hideLoader$!: Observable<boolean>

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.router.events.pipe(
      tap(console.log),
      map(e => e instanceof ResolveStart ? true : false) 
    )
  }
}
