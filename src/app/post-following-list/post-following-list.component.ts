import { Component, OnInit } from '@angular/core';

import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Post } from '../services/models/post';


@Component({
  selector: 'app-post-following-list',
  templateUrl: './post-following-list.component.html',
  styleUrls: ['./post-following-list.component.scss']
})
export class PostFollowingListComponent implements OnInit {
  //contian list of posts
  followingPosts: Post[] = [];
  constructor(private postDataService: PostDataService) { }

  ngOnInit() {
    
    this.followingPosts = this.postDataService.getData();


  }

}
