import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Post } from '../services/models/post';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {
  selectedFile: File = null;
  post: Post = new Post();
  returnedPost: Post = new Post();
  resp: string = null;
  postId: number;
  
  constructor(private postDataService: PostDataService, private router: Router) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    //this.saveFile();
    //localStorage.('file', this.selectedFile);
  }

  async submit(){
    this.returnedPost = await this.postDataService.createPost(this.post);
    
    


    this.postId = this.returnedPost.postId;
    this.saveImage();
    
  }

  async saveImage(){
this.resp = await this.postDataService.createPostImage(this.selectedFile, this.postId);

  }

}
