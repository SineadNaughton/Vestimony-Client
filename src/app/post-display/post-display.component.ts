import { Component, OnInit, Input, Output } from '@angular/core';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../services/models/post';
import { Vestimonial } from '../services/models/vestimonial';
import { ApplicationUser } from '../services/models/application-user';
import { Item } from '../services/models/item';

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

  constructor(private postDataService: PostDataService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.post = await this.postDataService.getPost(this.postId);
    this.user = this.post.applicationUser;
    this.profileImageUrl = "http://localhost:8080/vestimony/users/image/"+this.user.userId;
    this.postImageUrl = "http://localhost:8080/vestimony/posts/image/" + this.postId;
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

}
