import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  itemId: number;
  imageUrl: string;
  item: Item = new Item();

  constructor(private itemDataService: ItemDataService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.itemId = this.route.snapshot.params.id;
    this.item = await this.itemDataService.getItem(this.itemId);
    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.itemId;
  }

}
