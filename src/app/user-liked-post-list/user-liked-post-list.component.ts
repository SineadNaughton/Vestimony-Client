import { Component, OnInit } from '@angular/core';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';

@Component({
  selector: 'app-user-liked-post-list',
  templateUrl: './user-liked-post-list.component.html',
  styleUrls: ['./user-liked-post-list.component.scss']
})
export class UserLikedPostListComponent implements OnInit {
  likedPosts: Post[] = [];
  constructor(private postDataService: PostDataService) { }

 async ngOnInit() {
    this.likedPosts =  await this.postDataService.getLikedPosts();
  }

}
