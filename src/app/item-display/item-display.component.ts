import { Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Post } from '../services/models/post';
import { VestimonialDataService } from '../services/vestimony-api/vestimonial-data.service';
import { Vestimonial } from '../services/models/vestimonial';
import { Location } from '@angular/common';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { VestimonyApiConfig } from '../services/vestimony-api/vestimony-api-config';

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
  vestimonials: Vestimonial[] = [];
  saved: boolean;
  savedResponse: any;
  sizeNumber: number;
  adjustment: string = "";
  vestimonialView: boolean;
  postView: boolean;

  constructor(private itemDataService: ItemDataService, private route: ActivatedRoute, private postDataService: PostDataService, private vestimonialDataService: VestimonialDataService, private location: Location) { }

  async ngOnInit() {
    this.itemId = this.route.snapshot.params.id;
    this.item = await this.itemDataService.getItem(this.itemId);
    this.item.isSaved = await this.itemDataService.isSaved(this.item.itemId);
    this.posts = await this.postDataService.getPostsForItem(this.itemId);
    this.imageUrl = VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/items/image/" + this.itemId;
    this.showView("postView");

    if(this.item.sizeAdjustment < 0){
      this.item.sizeAdjustment = this.item.sizeAdjustment * -1;
      if(this.item.sizeAdjustment > 1){
        this.adjustment = "Buy "+this.item.sizeAdjustment.toPrecision(1) +" sizes smaller";
      }
      else{
        this.adjustment = "Buy "+this.item.sizeAdjustment.toPrecision(1) +" size smaller";
      }
    }
    else if(this.item.sizeAdjustment === 0){
      this.adjustment = "Buy true size";
    }
    else{
      if(this.item.sizeAdjustment > 1){
        this.adjustment = "Buy "+this.item.sizeAdjustment.toPrecision(1) +" sizes bigger";
      }
      else{
        this.adjustment = "Buy "+this.item.sizeAdjustment.toPrecision(1) +" size bigger";
      }
    }


  }

  async saveItem(item: Item) {
    this.savedResponse = await this.itemDataService.saveItem(item.itemId);
    item.isSaved = true;
    this.item.numSaved ++;
  }

  async unsaveItem(item: Item) {
    this.savedResponse = await this.itemDataService.unsaveItem(item.itemId);
    item.isSaved = false;
    this.item.numSaved--;
  }

  async showView(viewType: string){
    if(viewType==="postView"){
      this.postView = true;
      this.vestimonialView = false;
      this.posts  = await this.postDataService.getPostsForItem(this.itemId);

    }
    if(viewType==="vestimonialView"){
      this.vestimonialView = true;
      this.postView = false;
      this.vestimonials = await this.vestimonialDataService.getItemVestimonials(this.itemId);
    }
  }

  backClicked() {
    this.location.back();
  }

  linkToBuy(){
    this.itemDataService.linkToBuyThroughItem(this.item.itemId);
  }


}
