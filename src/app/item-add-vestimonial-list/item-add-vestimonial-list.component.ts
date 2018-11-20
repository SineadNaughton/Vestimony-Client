import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';

@Component({
  selector: 'app-item-add-vestimonial-list',
  templateUrl: './item-add-vestimonial-list.component.html',
  styleUrls: ['./item-add-vestimonial-list.component.scss']
})
export class ItemAddVestimonialListComponent implements OnInit {
  @Input() items: Item[];
  @Input() postId: number;
  
  
  
  constructor(private itemDataService: ItemDataService) { }

  async ngOnInit() {
    this.items = await this.itemDataService.getItemData();
  }

}
