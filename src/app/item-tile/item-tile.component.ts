import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { TruncatePipe } from '../pipes/truncate.pipe';


@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.scss']
})
export class ItemTileComponent implements OnInit {

  @Input() item: Item;
  @Output() itemChange = new EventEmitter<Item>();
  @Input() index: number;
  @Input() addVestimonial: boolean;
  @Input() postId: number;


  imageUrl: string;
  savedResponse: any;
  fullName: string;





  constructor(private itemDataService: ItemDataService, private truncatePipe: TruncatePipe) {

  }

  async ngOnInit() {

    if (this.index < 4) {
      this.item.isInView = true;
    }
    else {
      this.item.isInView = false;
    }

    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.item.itemId;
    
    //this.itemChange.emit(this.item);

    if (this.item.name != null) {
      this.fullName = this.item.name;
      this.item.name = this.truncatePipe.transform(this.item.name, 22);
    }
    else {
      this.fullName = "";
    }
  }

  async saveItem(itemId: number) {
    this.savedResponse = await this.itemDataService.saveItem(this.item.itemId);
    this.item.isSaved = true;
    //this.itemChange.emit(this.item);
    this.item.numSaved ++;
  }

  async unsaveItem(itemId: number) {
    this.savedResponse = await this.itemDataService.unsaveItem(this.item.itemId);
    this.item.isSaved = false;
    //this.itemChange.emit(this.item);
    this.item.numSaved --;
  }

  async inview(event) {
    this.item.isInView = this.item.isInView || !event.isOutsideView;
    if (this.item.isInView === true) {
      this.item.isSaved = await this.itemDataService.isSaved(this.item.itemId);
    }
  }

}
