import { Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationUser } from '../services/models/application-user';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Location } from '@angular/common';
import { VestimonyApiConfig } from '../services/vestimony-api/vestimony-api-config';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent implements OnInit {
  userId: number;
  imageUrl: string;
  user: ApplicationUser = new ApplicationUser();
  profileImageUrl: string;
  following: boolean;
  response: string;
  posts: Post[] = [];
  numPosts: number;
  profileDisplay: boolean = true;
  onProfile: boolean =true;


  constructor(private location: Location, private profileDataService: ProfileDataService, private route: ActivatedRoute, private postDataService: PostDataService) { }

  async ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.user = await this.profileDataService.getProfile(this.userId);
    this.posts = await this.postDataService.getPostDataForProfile(this.userId);
    this.profileImageUrl = VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/users/image/" + this.userId;
    this.following = await this.profileDataService.isFollowing(this.userId);
    this.numPosts = this.posts.length;
  }

  async follow() {
    this.response = await this.profileDataService.follow(this.userId);
    this.following = true;
    this.user.numFollowers++;
  }

  async unfollow() {
    this.response = await this.profileDataService.unfollow(this.userId);
    this.following = false;
    this.user.numFollowers--;
  }

  backClicked() {
    this.location.back();
  }
  

}
