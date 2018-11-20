import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vestimonial } from '../services/models/vestimonial';
import { VestimonialDataService } from '../services/vestimony-api/vestimonial-data.service';

@Component({
  selector: 'app-vestimonial-link',
  templateUrl: './vestimonial-link.component.html',
  styleUrls: ['./vestimonial-link.component.scss']
})
export class VestimonialLinkComponent implements OnInit {
  postId: Number;
  vestimonials: Vestimonial[] = [];

  constructor(private route: ActivatedRoute, private vestimonialDataService: VestimonialDataService) { }

  async ngOnInit() {
    this.postId = this.route.snapshot.params.id;
    this.vestimonials = await this.vestimonialDataService.getUsersVestimonial();

  }

}
