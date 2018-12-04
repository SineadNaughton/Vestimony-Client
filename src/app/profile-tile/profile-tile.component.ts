import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';

@Component({
  selector: 'app-profile-tile',
  templateUrl: './profile-tile.component.html',
  styleUrls: ['./profile-tile.component.scss']
})
export class ProfileTileComponent implements OnInit {
  @Input() user: ApplicationUser;
  profileImageUrl: string;
  userId: number;

  constructor() { }

  ngOnInit() {
    this.userId = this.user.userId;
    this.profileImageUrl = "http://localhost:8080/vestimony/users/image/"+this.userId;
  
  }

}
