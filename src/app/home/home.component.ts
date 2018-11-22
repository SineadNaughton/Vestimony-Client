import { Component, OnInit } from '@angular/core';
import { CurrentUserDataService } from '../services/vestimony-api/current-user-data.service';
import { ApplicationUser } from '../services/models/application-user';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Item } from '../services/models/item';
import { ItemDataService } from '../services/vestimony-api/item-data.service';
import { PostDataService } from '../services/vestimony-api/post-data.service';
import { Post } from '../services/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  following: boolean;
  trending: boolean;
  topItems: boolean;
  currentUser: ApplicationUser;
  public email: string;
  items: Item[] = [];
  posts: Post[] = [];



  constructor(private currentUserData: CurrentUserDataService, private itemDataService: ItemDataService, private postDataService: PostDataService) { }

  async ngOnInit() {
    
    this.showHomeView("trending");
     this.currentUser = await this.currentUserData.getCurrentUser();
     this.email = this.currentUser.email;
     
     
  }

 async showHomeView(viewType: string){
    if (viewType==="following"){
      this.following = true;
      this.trending = false;
      this.topItems= false;
      this.posts =  await this.postDataService.getPostData();

    }
    else if (viewType==="trending"){
      this.following = false;
      this.trending = true;
      this.topItems= false;
      this.posts =  await this.postDataService.getTrending();
    }
    else if (viewType==="topItems"){
      this.topItems= true;
      this.following = false;
      this.trending = false;
      this.items = await this.itemDataService.getTopRated();
    }



  }

}
