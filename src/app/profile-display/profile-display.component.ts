import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationUser } from '../services/models/application-user';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent implements OnInit {
  userId: number;
  imageUrl: string;
  user: ApplicationUser = new ApplicationUser();
  profileImageUrl: string;
  following: boolean;
  response: string;


  constructor(private profileDataService: ProfileDataService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.user = await this.profileDataService.getProfile(this.userId);

    this.profileImageUrl = "http://localhost:8080/vestimony/users/image/"+this.userId;
    this.following = await this.profileDataService.isFollowing(this.userId);

  }

  async follow(){
    this.response = await this.profileDataService.follow(this.userId);
    this.following = true;
  }

  async unfollow(){
    this.response = await this.profileDataService.unfollow(this.userId);
    this.following = false;
  }

}
