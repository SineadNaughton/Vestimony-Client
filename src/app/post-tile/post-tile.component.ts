import { Component, OnInit, Input } from '@angular/core';

import { TruncatePipe } from '../pipes/truncate.pipe';
import { Post } from '../services/models/post';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent implements OnInit {
  @Input() post: Post;
  fullSummary: string;



  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);

  }

  //when the hidden text is clicked this will reverse it to full view again
  showFullSummary() {
    this.post.summary = this.fullSummary;
  }



}
