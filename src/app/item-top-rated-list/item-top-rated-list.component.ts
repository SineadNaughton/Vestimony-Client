import { Component, OnInit } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';

@Component({
  selector: 'app-item-top-rated-list',
  templateUrl: './item-top-rated-list.component.html',
  styleUrls: ['./item-top-rated-list.component.scss']
})
export class ItemTopRatedListComponent implements OnInit {
  items: Item[] = [];
  
  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
    this.items = await this.itemDataService.getTopRated();
  }

}
