import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';

@Component({
  selector: 'app-post-for-profile-list',
  templateUrl: './post-for-profile-list.component.html',
  styleUrls: ['./post-for-profile-list.component.scss']
})
export class PostForProfileListComponent implements OnInit {
  posts: Post[] = [];
  @Input() userId: number;
  constructor(private postDataService: PostDataService) { }

  async ngOnInit() {
    this.posts =  await this.postDataService.getPostDataForProfile(this.userId);
  }

}
