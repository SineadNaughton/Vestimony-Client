import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vestimonial } from '../services/models/vestimonial';
import { VestimonialDataService } from '../services/vestimony-api/vestimonial-data.service';

@Component({
  selector: 'app-vestimonial-add-review',
  templateUrl: './vestimonial-add-review.component.html',
  styleUrls: ['./vestimonial-add-review.component.scss']
})
export class VestimonialAddReviewComponent implements OnInit {
itemId: number;
 postId: number;
 vestimonial: Vestimonial = new Vestimonial();
 resp: string ="";
  

  constructor(private route: ActivatedRoute, private vestimonialDataService: VestimonialDataService, private router: Router) { }

  ngOnInit() {
    
    
    this.postId = this.route.snapshot.params.postId;
    this.itemId = this.route.snapshot.params.itemId;
  }

  async submit(){
    this.resp = await this.vestimonialDataService.createVestimonial(this.vestimonial, this.postId, this.itemId);

  }

  async submitAndLinkAnother(){
    this.resp = await this.vestimonialDataService.createVestimonial(this.vestimonial, this.postId, this.itemId);
    //redirect to list of links
    this.router.navigate(['/vestimonial/link', this.postId]);
  }

  async submitAndCreateAnother(){
    this.resp = await this.vestimonialDataService.createVestimonial(this.vestimonial, this.postId, this.itemId);
    //redirect to list of items
    this.router.navigate(['/vestimonial/add', this.postId]);
  }

}

