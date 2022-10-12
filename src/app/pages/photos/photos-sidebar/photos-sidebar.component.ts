import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Photo {
  id: number;
  url: string;
}

@Component({
  selector: 'app-photos-sidebar',
  templateUrl: './photos-sidebar.component.html',
  styleUrls: ['./photos-sidebar.component.scss']
})
export class PhotosSidebarComponent implements OnInit {
  
  photos$!: Observable<Photo[]> 

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.photos$ = this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
  }
}
