import { Component, OnInit } from '@angular/core';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';

@Component({
  selector: 'app-post-trending-list',
  templateUrl: './post-trending-list.component.html',
  styleUrls: ['./post-trending-list.component.scss']
})
export class PostTrendingListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postDataService: PostDataService) { }

 async ngOnInit() {

    this.posts =  await this.postDataService.getTrending();
  }

}
