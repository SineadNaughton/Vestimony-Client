import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { Vestimonial } from '../services/models/vestimonial';
import { Item } from '../services/models/item';
import { ApplicationUser } from '../services/models/application-user';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { VestimonyApiConfig } from '../services/vestimony-api/vestimony-api-config';

@Component({
  selector: 'app-vestimonial-tile',
  templateUrl: './vestimonial-tile.component.html',
  styleUrls: ['./vestimonial-tile.component.scss']
})
export class VestimonialTileComponent implements OnInit {
  @Input() vestimonial: Vestimonial = new Vestimonial();
  @Input() linking: boolean;
  @Input() postId: number;

  item: Item = new Item();
  user: ApplicationUser = new ApplicationUser()
  itemImageUrl:string;
  saved: boolean;
  savedResponse: any;

  constructor(private itemDataService: ItemDataService,) { }

 async ngOnInit() {
    this.item = this.vestimonial.item;
    this.user = this.vestimonial.applicaitonUser;
    this.itemImageUrl = VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/items/image/" + this.item.itemId;
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

  linkToBuy(){
    this.itemDataService.linkToBuyThroughVestimonial(this.item.itemId, this.user.userId);
  }

}
