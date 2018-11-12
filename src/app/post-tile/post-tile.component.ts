import { Component, OnInit, Input } from '@angular/core';

import { TruncatePipe } from '../pipes/truncate.pipe';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {
  @Input() post: Post;
  fullSummary: string;
  liked: boolean;
  likedResponse: any;
  numLikes: number;




  constructor(private truncatePipe: TruncatePipe, private postDataService: PostDataService) { }

  async ngOnInit() {

    if (this.post.postInfo != null) {
      this.fullSummary = this.post.postInfo;
      this.post.postInfo = this.truncatePipe.transform(this.post.postInfo, 30);
    }
    else {
      this.fullSummary = "";
    }

    this.liked = await this.postDataService.isLiked(this.post.postId);
    this.numLikes = this.post.numLikes;



  }

  //when the hidden text is clicked this will reverse it to full view again
  showFullSummary() {
    this.post.postInfo = this.fullSummary;
  }

  async likePost(postId: number) {
    this.likedResponse = await this.postDataService.likePost(postId);
    this.liked = true;
    console.log(this.liked);
  }

  async unlikePost(postId: number) {
    this.likedResponse = await this.postDataService.unlikePost(postId);
    this.liked = false;
    console.log(this.liked);
  }



}
