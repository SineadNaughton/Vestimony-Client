import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Post } from '../services/models/post';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

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
  theFile: File;
  
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
//this.resp = await this.postDataService.createPostImage(this.selectedFile, this.postId);

    this.resp = await this.postDataService.createPostImage(this.theFile, this.postId);

  }

  imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
async imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.theFile = this.blobToFile(event.file, 'file.png')
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}

public blobToFile = (theBlob: Blob, fileName:string): File => {
  var b: any = theBlob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;

  //Cast to a File() type
  return <File>theBlob;
}

}
