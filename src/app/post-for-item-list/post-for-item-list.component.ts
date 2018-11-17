import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';

@Component({
  selector: 'app-post-for-item-list',
  templateUrl: './post-for-item-list.component.html',
  styleUrls: ['./post-for-item-list.component.scss']
})
export class PostForItemListComponent implements OnInit {
posts: Post[] = [];
@Input() itemId: number;
  
constructor(private postDataService: PostDataService) { }

  async ngOnInit() {
    this.posts = await this.postDataService.getPostsForItem(this.itemId);
  }

}
