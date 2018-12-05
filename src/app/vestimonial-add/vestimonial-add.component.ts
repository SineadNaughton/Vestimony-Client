import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vestimonial-add',
  templateUrl: './vestimonial-add.component.html',
  styleUrls: ['./vestimonial-add.component.scss']
})
export class VestimonialAddComponent implements OnInit {
addVestimonial: boolean = true;
postId: Number;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.id;
  }

}
