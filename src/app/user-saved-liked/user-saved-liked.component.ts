import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-saved-liked',
  templateUrl: './user-saved-liked.component.html',
  styleUrls: ['./user-saved-liked.component.scss']
})
export class UserSavedLikedComponent implements OnInit {
  
  saved: boolean;
  liked: boolean;
  constructor() { }

  ngOnInit() {

    this.liked = true;
     
  }

  showView(viewType: string){
    if (viewType==="liked"){
      this.liked = true;
      this.saved = false;
    }
    else if (viewType==="saved"){
      this.saved = true;
      this.liked = false;
    }

  }

}
