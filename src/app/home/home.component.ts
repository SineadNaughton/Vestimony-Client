import { Component, OnInit } from '@angular/core';
import { CurrentUserDataService } from '../services/vestimony-api/current-user-data.service';
import { ApplicationUser } from '../services/models/application-user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  following: boolean;
  trending: boolean;
  currentUser: ApplicationUser;
  public email: string;



  constructor(private currentUserData: CurrentUserDataService) { }

  async ngOnInit() {
    this.following = true;
     this.currentUser = await this.currentUserData.getCurrentUser();
     this.email = this.currentUser.email;
  }

  showHomeView(viewType: string){
    if (viewType==="following"){
      this.following = true;
      this.trending = false;
    }
    else if (viewType==="trending"){
      this.following = false;
      this.trending = true;
    }



  }

}
