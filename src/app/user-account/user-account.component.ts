import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';
import { CurrentUserDataService } from '../services/vestimony-api/current-user-data.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  user: ApplicationUser = new ApplicationUser();
  profileImageUrl: string;
  userId: number;
  selectedFile: File = null;
  resp: string;
  edit: boolean;
  theFile: File;
  editImage: boolean;
  showButton: boolean;

  constructor(private currentUserDataService: CurrentUserDataService, private router: Router) { }

  async ngOnInit() {
    this.user = await this.currentUserDataService.getCurrentUser();
    this.userId = this.user.userId;
    this.profileImageUrl = "http://localhost:8080/vestimony/users/image/" + this.user.userId;
    this.showButton=true;
  }

  editAccountDropdown(){
    this.edit = true;
    this.showButton = false;
  }

  async saveChanges(){
    this.resp = await this.currentUserDataService.editAccount(this.user);
    if(this.resp==="OK"){
      this.showButton = true;
      this.edit=false;
    }
  }

  abondonChanges(){
    this.showButton = true;
    this.edit=false;
  }



  //change profile photo

  editImageDropdown(){
    this.editImage=true;
    this.showButton = false;
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    //this.saveFile();
    //localStorage.('file', this.selectedFile);
  }

  async submit(){
    this.saveImage();
  }

  async saveImage(){
    //this.resp = await this.postDataService.createPostImage(this.selectedFile, this.postId);
        this.resp = await this.currentUserDataService.setProfileImage(this.theFile);
        this.editImage=false;
        this.showButton=true;
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

      cancelImage(){
        this.editImage=false;
        this.showButton=true;
      }
}
