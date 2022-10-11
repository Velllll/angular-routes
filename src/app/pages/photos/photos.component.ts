import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Photo {
  id: number;
  url: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$!: Observable<Photo[]> 

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.photos$ = this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=5')
  }

  openDetails(id: number) {
    this.router.navigate(['photos/' + id])
  }
}
