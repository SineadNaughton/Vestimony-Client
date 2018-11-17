import { Component, OnInit, Input } from '@angular/core';
import { Vestimonial } from '../services/models/vestimonial';
import { Item } from '../services/models/item';
import { ApplicationUser } from '../services/models/application-user';

@Component({
  selector: 'app-vestimonial-tile',
  templateUrl: './vestimonial-tile.component.html',
  styleUrls: ['./vestimonial-tile.component.scss']
})
export class VestimonialTileComponent implements OnInit {
  @Input() vestimonial: Vestimonial = new Vestimonial();
  item: Item = new Item();
  user: ApplicationUser = new ApplicationUser()
  constructor() { }

  ngOnInit() {
    this.item = this.vestimonial.item;
    this.user = this.vestimonial.applicaitonUser;
  }

}
