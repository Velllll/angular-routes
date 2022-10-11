import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Photo } from '../photos/photos.component';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photoDetails$!: Observable<Photo> 

  constructor(
    private aRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.photoDetails$ = this.aRoute.params.pipe(
      switchMap(param => {
        const id = param['id']
        return this.http.get<Photo>('https://jsonplaceholder.typicode.com/photos/' + id)
      })
    )
  }

}
