import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';
import { CurrentUserDataService } from '../services/vestimony-api/current-user-data.service';

@Component({
  selector: 'app-user-account-edit',
  templateUrl: './user-account-edit.component.html',
  styleUrls: ['./user-account-edit.component.scss']
})
export class UserAccountEditComponent implements OnInit {
  user: ApplicationUser = new ApplicationUser();
  selectedFile: File = null;
  resp: string;
  
  constructor(private currentUserDataService: CurrentUserDataService) { }
  

  async ngOnInit() {

    this.user = await this.currentUserDataService.getCurrentUser();
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.saveFile();

  }

  private async saveFile() {
    this.resp = await this.currentUserDataService.setProfileImage(this.selectedFile);
  }

}
