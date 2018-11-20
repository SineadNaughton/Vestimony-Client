import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';


@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.scss']
})
export class ItemTileComponent implements OnInit {

  @Input() item: Item;
  @Output() itemChange = new EventEmitter<Item>();
  @Input() index: number;
  

  imageUrl: string;
  savedResponse: any;
  
  


  constructor(private itemDataService: ItemDataService) { 
   
  }

  async ngOnInit() {

    if(this.index < 4){
      this.item.isInView=true;
    }
    else{
      this.item.isInView = false;
    }
    
    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.item.itemId;
    this.item.isSaved = await this.itemDataService.isSaved(this.item.itemId);
    //this.itemChange.emit(this.item);
  }

  async saveItem(itemId: number) {
    this.savedResponse = await this.itemDataService.saveItem(this.item.itemId);
    this.item.isSaved = true;
    this.itemChange.emit(this.item);
  }

  async unsaveItem(itemId: number) {
    this.savedResponse = await this.itemDataService.unsaveItem(this.item.itemId);
    this.item.isSaved = false;
    this.itemChange.emit(this.item);
  }

  inview(event){
    this.item.isInView = this.item.isInView || !event.isOutsideView;
  }

}
