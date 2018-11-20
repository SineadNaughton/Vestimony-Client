import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';

@Component({
  selector: 'app-vestimonial-add-item-list',
  templateUrl: './vestimonial-add-item-list.component.html',
  styleUrls: ['./vestimonial-add-item-list.component.scss']
})
export class VestimonialAddItemListComponent implements OnInit {
  @Input() items: Item[];
  
  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
    this.items = await this.itemDataService.getItemData();
  }

}
