import { Component, OnInit, Input, Output, isDevMode } from '@angular/core';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../services/models/post';
import { Vestimonial } from '../services/models/vestimonial';
import { ApplicationUser } from '../services/models/application-user';
import { Location } from '@angular/common';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';
import { VestimonyApiConfig } from '../services/vestimony-api/vestimony-api-config';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.scss']
})
export class PostDisplayComponent implements OnInit {
  postId: number;
  postImageUrl: string;
  profileImageUrl: string;
  post: Post = new Post();
  user: ApplicationUser = new ApplicationUser();
  userName: string = "";
  vestimonials: Vestimonial[] = [];
  liked: boolean;
  likedResponse:string;

  constructor(private postDataService: PostDataService, private route: ActivatedRoute, private location: Location, private profileDataService: ProfileDataService) { }

  async ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.post = await this.postDataService.getPost(this.postId);
    this.user = await this.profileDataService.getProfile(this.post.userId);
    this.profileImageUrl = VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/users/image/"+this.user.userId;
    this.postImageUrl = VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/image/" + this.postId;
    this.vestimonials = this.post.vestimonials;
    this.userName = this.user.username;
    this.liked = await this.postDataService.isLiked(this.post.postId);

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
  backClicked() {
    this.location.back();
  }
  

}
