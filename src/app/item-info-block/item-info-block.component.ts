import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-info-block',
  templateUrl: './item-info-block.component.html',
  styleUrls: ['./item-info-block.component.scss']
})
export class ItemInfoBlockComponent implements OnInit {

  item: Item;
  imageUrl: string;
  @Input() itemId: number;
  private sub: any;

  constructor(private itemDataService: ItemDataService, private route: ActivatedRoute) { }

  async ngOnInit() {
    // subscribe to the parameters observable
    //this.route.paramMap.subscribe(params => {
   //   console.log(params.get('username'));
   //   this.username = params.get('username');
   // });

    this.itemId = this.route.snapshot.params.id;
    this.item = await this.itemDataService.getItem(this.item.itemId);
    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.itemId;
  }

}
