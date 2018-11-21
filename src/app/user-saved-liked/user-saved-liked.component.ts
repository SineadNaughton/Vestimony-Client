import { Component, OnInit } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Post } from '../services/models/post';
import { PostDataService } from '../services/vestimony-api/post-data.service';

@Component({
  selector: 'app-user-saved-liked',
  templateUrl: './user-saved-liked.component.html',
  styleUrls: ['./user-saved-liked.component.scss']
})
export class UserSavedLikedComponent implements OnInit {
  items: Item[]=[];
  posts: Post[] = [];

  saved: boolean;
  liked: boolean;
  constructor(private itemDataService: ItemDataService, private postDataService: PostDataService) { }

 async ngOnInit() {
    this.showView("liked")
  }

  async showView(viewType: string){
    if (viewType==="liked"){
      this.liked = true;
      this.saved = false;
      this.posts =  await this.postDataService.getLikedPosts();

    }
    else if (viewType==="saved"){
      this.saved = true;
      this.liked = false;
      this.items =  await this.itemDataService.getSavedItems();
    }

  }

}
