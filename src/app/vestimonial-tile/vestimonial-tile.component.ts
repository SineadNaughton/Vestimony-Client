import { Component, OnInit, Input } from '@angular/core';
import { Vestimonial } from '../services/models/vestimonial';
import { Item } from '../services/models/item';
import { ApplicationUser } from '../services/models/application-user';
import { ItemDataService } from '../services/vestimony-api/item-data.service';

@Component({
  selector: 'app-vestimonial-tile',
  templateUrl: './vestimonial-tile.component.html',
  styleUrls: ['./vestimonial-tile.component.scss']
})
export class VestimonialTileComponent implements OnInit {
  @Input() vestimonial: Vestimonial = new Vestimonial();
  item: Item = new Item();
  user: ApplicationUser = new ApplicationUser()
  itemImageUrl:string;
  saved: boolean;
  savedResponse: any;

  constructor(private itemDataService: ItemDataService,) { }

 async ngOnInit() {
    this.item = this.vestimonial.item;
    this.user = this.vestimonial.applicaitonUser;
    this.itemImageUrl = "http://localhost:8080/vestimony/items/image/" + this.item.itemId;
    this.item.isSaved = await this.itemDataService.isSaved(this.item.itemId);
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
