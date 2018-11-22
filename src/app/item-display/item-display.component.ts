import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Post } from '../services/models/post';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  itemId: number;
  imageUrl: string;
  item: Item = new Item();
  posts: Post[] = [];
  saved: boolean;
  savedResponse: any;
  sizeNumber: number = 2;
  direction: string = "bigger";
  constructor(private itemDataService: ItemDataService, private route: ActivatedRoute, private postDataService: PostDataService) { }

  async ngOnInit() {
    this.itemId = this.route.snapshot.params.id;
    this.item = await this.itemDataService.getItem(this.itemId);
    this.item.isSaved = await this.itemDataService.isSaved(this.item.itemId);
    this.posts = await this.postDataService.getPostsForItem(this.itemId);
    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.itemId;
  }

  async saveItem(item: Item) {
    this.savedResponse = await this.itemDataService.saveItem(item.itemId);
    item.isSaved = true;
  }

  async unsaveItem(item: Item) {
    this.savedResponse = await this.itemDataService.unsaveItem(item.itemId);
    item.isSaved = false;
  }


}
