import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';
import { ApplicationUser } from '../services/models/application-user';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.scss']
})
export class ProfileSearchComponent implements OnInit {
  users: ApplicationUser[] = [];
  searchName: string;
  


  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
  }

  async submitProfileSearch(){
    this.users =await this.profileDataService.getProfileSearch(this.searchName);
  }

}
