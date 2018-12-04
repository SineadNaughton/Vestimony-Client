import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../services/models/post';


@Component({
  selector: 'app-post-tile-list',
  templateUrl: './post-tile-list.component.html',
  styleUrls: ['./post-tile-list.component.scss']
})
export class PostTileListComponent  {
  
@Input() posts: Post[];
@Input() onProfile: boolean;

  constructor() { }

async gOnInit() {
   
  }

}
