import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from 'src/app/service/get-data.service';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$!: Observable<IPost[]>

  constructor(
    private getData: GetDataService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.getData.getPosts()
  }

}
