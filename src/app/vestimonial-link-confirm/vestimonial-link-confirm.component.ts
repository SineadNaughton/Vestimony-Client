import { Component, OnInit, Input } from '@angular/core';
import { VestimonialDataService } from '../services/vestimony-api/vestimonial-data.service';
import { Vestimonial } from '../services/models/vestimonial';
import { ActivatedRoute, Router } from '@angular/router';




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
  
  constructor(private route: ActivatedRoute, private vestimonialDataService: VestimonialDataService, private router: Router) { }

 async ngOnInit() {
  this.postId = this.route.snapshot.params.postId;
    //this.postId = this.route.parent.snapshot.params.id;
    this.vestimonialId = this.route.snapshot.params.vestimonialId;
    /*const vestResp = await this.vestimonialDataService.getVestimonial(this.vestimonialId);
    this.vestimonial = vestResp;*/
  }

  async submit(){
    this.resp = await this.vestimonialDataService.linkVestimonial(this.vestimonialId, this.postId);
    this.router.navigate(['/home']);
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

}
