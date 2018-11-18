import { Component, OnInit } from '@angular/core';


import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';

@Component({
  selector: 'app-item-tile-list',
  templateUrl: './item-tile-list.component.html',
  styleUrls: ['./item-tile-list.component.scss']
})
export class ItemTileListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
    this.items = await this.itemDataService.getItemData();
  }

 

}
