import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';


@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.scss']
})
export class ItemTileComponent implements OnInit {

  @Input() item: Item;
  @Input() index: number;
  saved: boolean;
  imageUrl: string;
  savedResponse: any;
  isInView: boolean = false;
  


  constructor(private itemDataService: ItemDataService) { 
   
  }

  async ngOnInit() {

    if(this.index < 4){
      this.isInView=true;
    }
    
    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.item.itemId;
    this.saved = await this.itemDataService.isSaved(this.item.itemId);
  }

  async saveItem(itemId: number) {
    this.savedResponse = await this.itemDataService.saveItem(this.item.itemId);
    this.saved = true;
  }

  async unsaveItem(itemId: number) {
    this.savedResponse = await this.itemDataService.unsaveItem(this.item.itemId);
    this.saved = false;
  }

  inview(event){
    console.log(event);
    //
    this.isInView = this.isInView || !event.isOutsideView;
  }

}
