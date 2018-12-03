import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vestimonial } from '../services/models/vestimonial';
import { VestimonialDataService } from '../services/vestimony-api/vestimonial-data.service';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { Item } from '../services/models/item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vestimonial-add-review',
  templateUrl: './vestimonial-add-review.component.html',
  styleUrls: ['./vestimonial-add-review.component.scss']
})
export class VestimonialAddReviewComponent implements OnInit {
  itemId: number;
  postId: number;
  vestimonial: Vestimonial = new Vestimonial();
  resp: string = "";
  item: Item = new Item();
  imageUrl: string;
  showSubmitBtn: boolean;
  showLinkBtn:boolean;

  constructor(private location: Location, private route: ActivatedRoute, private vestimonialDataService: VestimonialDataService, private router: Router, private itemDataService: ItemDataService) { }

  async ngOnInit() {

    this.showSubmitBtn=true;
    this.postId = this.route.snapshot.params.postId;
    this.itemId = this.route.snapshot.params.itemId;
    this.item = await this.itemDataService.getItem(this.itemId);
    this.imageUrl = "http://localhost:8080/vestimony/items/image/" + this.itemId;

  }

  async submit() {
    this.resp = await this.vestimonialDataService.createVestimonial(this.vestimonial, this.postId, this.itemId);
    if (this.resp === "OK") {
      this.router.navigate(['/posts', this.postId]);
    }
    else {
      this.showSubmitBtn = false;
      this.showLinkBtn = true;
    }

  }

  async submitAndLinkAnother() {
    this.resp = await this.vestimonialDataService.createVestimonial(this.vestimonial, this.postId, this.itemId);
    //redirect to list of links
    if (this.resp === "OK") {
      this.router.navigate(['/vestimonial/link', this.postId]);
    }
    else if(this.resp === "exists"){
      this.showSubmitBtn = false;
      this.showLinkBtn = true;
    }
    //else flash notice
  }

  async submitAndCreateAnother() {
    this.resp = await this.vestimonialDataService.createVestimonial(this.vestimonial, this.postId, this.itemId);
    //redirect to list of items
    if (this.resp === "OK") {
      this.router.navigate(['/vestimonial/add', this.postId]);
    }
    else if(this.resp === "exists"){
      this.showSubmitBtn = false;
      this.showLinkBtn = true;
    }
  }

  linkInstead(){
    this.router.navigate(['/vestimonial/link', this.postId]);
  }

  backClicked() {
    this.location.back();
  }

}

