import { Component, OnInit } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';

@Component({
  selector: 'app-user-saved-item-list',
  templateUrl: './user-saved-item-list.component.html',
  styleUrls: ['./user-saved-item-list.component.scss']
})
export class UserSavedItemListComponent implements OnInit {
  savedItems: Item[] = [];

  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
    this.savedItems =  await this.itemDataService.getSavedItems();
  }

}
