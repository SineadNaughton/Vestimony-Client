import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  viewType: string;
  itemView:boolean;
  profileView:boolean;


  constructor() { }

  ngOnInit() {
    this.viewType="items";
    this.showView(this.viewType);
  }

  showView(viewType: string){
    if (viewType==="items"){
      this.itemView = true;
      this.profileView = false;
    }

    else if (viewType==="profiles"){
      this.itemView = false;
      this.profileView = true;
    }
  }


}
