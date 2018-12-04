import { Component, OnInit, Input } from '@angular/core';
import { VestimonialDataService } from '../services/vestimony-api/vestimonial-data.service';
import { Vestimonial } from '../services/models/vestimonial';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../services/models/item';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';




@Component({
  selector: 'app-vestimonial-link-confirm',
  templateUrl: './vestimonial-link-confirm.component.html',
  styleUrls: ['./vestimonial-link-confirm.component.scss']
})
export class VestimonialLinkConfirmComponent implements OnInit {
  postId: number;
  vestimonialId: number;
  resp: string ="";
  vestimonial: Vestimonial = new Vestimonial();
  item: Item = new Item();
  itemImageUrl: string;
  showSubmitBtn: boolean;
  
  constructor(private route: ActivatedRoute, 
    private vestimonialDataService: VestimonialDataService, 
    private router: Router, 
    private location: Location,
    private flashMessagesService: FlashMessagesService) { }

 async ngOnInit() {
  this.showSubmitBtn=false;
  this.postId = this.route.snapshot.params.postId;
    //this.postId = this.route.parent.snapshot.params.id;
    this.vestimonialId = this.route.snapshot.params.vestimonialId;
    //const vestResp = await this.vestimonialDataService.getVestimonial(this.vestimonialId);
    this.vestimonial = await this.vestimonialDataService.getVestimonial(this.vestimonialId);
    this.item = this.vestimonial.item;
    this.itemImageUrl = "http://localhost:8080/vestimony/items/image/" + this.item.itemId;
  }

  async submit(){
    this.resp = await this.vestimonialDataService.linkVestimonial(this.vestimonialId, this.postId);
    if(this.resp === "Sucessfully linked"){
      this.router.navigate(['/posts', this.postId]);
    }
    else{
      this.showSubmitBtn=true;
      this.flashMessagesService.show("This vestimonial is already linked", {cssClass:"alert alert-danger", timeout: 30000 });
      
    }
  }

  async submitAndLinkAnother(){
    this.resp = await this.vestimonialDataService.linkVestimonial(this.vestimonialId, this.postId);
    //redirect to list of links
    this.router.navigate(['/vestimonial/link', this.postId]);
  }

  async submitAndCreateAnother(){
    this.resp = await this.vestimonialDataService.linkVestimonial(this.vestimonialId, this.postId);
    //redirect to list of items
    this.router.navigate(['/vestimonial/add', this.postId]);
  }

  finish(){
    this.router.navigate(['/posts', this.postId]);
  }

  backClicked() {
    this.location.back();
  }

}
