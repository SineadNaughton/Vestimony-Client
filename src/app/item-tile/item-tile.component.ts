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
  saved: boolean;
  imageUrl: string;
  savedResponse: any;
  route = {url: 'item'}
  

  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
    this.imageUrl = "http://localhost:8080/vestimony/items/image/"+this.item.itemId;
    this.saved = await this.itemDataService.isSaved(this.item.itemId);
  }

  async saveItem(itemId: number){
this.savedResponse = await this.itemDataService.saveItem(this.item.itemId);
    this.saved = true;
  }

  async unsaveItem(itemId: number){
    this.savedResponse = await this.itemDataService.unsaveItem(this.item.itemId);
        this.saved = false;
      }

}
