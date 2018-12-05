import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TruncatePipe } from '../pipes/truncate.pipe';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { ApplicationUser } from '../services/models/application-user';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';
import { VestimonyApiConfig } from '../services/vestimony-api/vestimony-api-config';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Input() onProfile: boolean;
  @Output() postChange = new EventEmitter<Post>();
  fullSummary: string;
  liked: boolean;
  likedResponse: any;
  numLikes: number;
  user: ApplicationUser = new ApplicationUser();
  profileImageUrl: string;
  postImageUrl: string;




  constructor(private truncatePipe: TruncatePipe, private postDataService: PostDataService, private profileDataService: ProfileDataService) { }

  async ngOnInit() {

    if(this.index < 4){
      this.post.isInView=true;
    }
    else{
      this.post.isInView = false;
    }

    if (this.post.postInfo != null) {
      this.fullSummary = this.post.postInfo;
      this.post.postInfo = this.truncatePipe.transform(this.post.postInfo, 100);
    }
    else {
      this.fullSummary = "";
    }

    this.user = await this.profileDataService.getProfile(this.post.userId);
    this.profileImageUrl = VestimonyApiConfig.BASE_URL + "/vestimony/users/image/"+this.user.userId;
    this.postImageUrl= VestimonyApiConfig.BASE_URL + "/vestimony/posts/image/"+this.post.postId;

  }

  //when the hidden text is clicked this will reverse it to full view again
  showFullSummary() {
    this.post.postInfo = this.fullSummary;
  }

  async likePost(postId: number) {
    this.likedResponse = await this.postDataService.likePost(postId);
    this.liked = true;
    console.log(this.liked);
    this.numLikes ++;
  }

  async unlikePost(postId: number) {
    this.likedResponse = await this.postDataService.unlikePost(postId);
    this.liked = false;
    console.log(this.liked);
    this.numLikes --;
  }

  async inview(event){
    this.post.isInView = this.post.isInView || !event.isOutsideView;
    if(this.post.isInView){
      this.liked = await this.postDataService.isLiked(this.post.postId);
      this.numLikes = this.post.numLikes;
    }
  }



}
