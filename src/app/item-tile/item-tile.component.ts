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
  

  constructor(private itemDataService: ItemDataService) { }

  ngOnInit() {
    this.imageUrl = "http://localhost:8080/vestimony/items/image/"+this.item.itemId;
  }

}
