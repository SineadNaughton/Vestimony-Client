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
imageUrl: string;
post: Post = new Post();
user: ApplicationUser = new ApplicationUser();
userName: string ="";
 vestimonials: Vestimonial[] = [];
  constructor(private postDataService: PostDataService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.post = await this.postDataService.getPost(this.postId);
    this.imageUrl = "http://localhost:8080/vestimony/posts/image/" + this.postId;
    this.vestimonials = this.post.vestimonials;
    this.user = this.post.applicationUser;
    this.userName = this.user.username;
  
  }

}
