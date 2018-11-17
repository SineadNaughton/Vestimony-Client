import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';
import { CurrentUserDataService } from '../services/vestimony-api/current-user-data.service';
import { Router } from '@angular/router';

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

  constructor(private currentUserDataService: CurrentUserDataService, private router: Router) { }

  async ngOnInit() {
    this.user = await this.currentUserDataService.getCurrentUser();
    this.userId = this.user.userId;
    this.profileImageUrl = "http://localhost:8080/vestimony/users/image/" + this.user.userId;
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.saveFile();

  }

  private async saveFile() {
    this.resp = await this.currentUserDataService.setProfileImage(this.selectedFile);
  }

}
