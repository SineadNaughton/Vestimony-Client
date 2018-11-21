import { Component, OnInit, Input } from '@angular/core';


import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';

@Component({
  selector: 'app-item-tile-list',
  templateUrl: './item-tile-list.component.html',
  styleUrls: ['./item-tile-list.component.scss']
})
export class ItemTileListComponent implements OnInit {
 @Input() items: Item[];
 saved: boolean;
 savedResponse: any;

  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
  //  this.items = await this.itemDataService.getItemData();
  
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
