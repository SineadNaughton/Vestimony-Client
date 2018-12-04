import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user:ApplicationUser = new ApplicationUser();
isCollapsed: boolean = true;
resp: string;

  constructor( 
    private profileDataService: ProfileDataService,
    private router: Router,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  showRegForm(){
    this.isCollapsed= false;
  }

  async register(){
    this.resp = await this.profileDataService.register(this.user);
    
    if (this.resp === "Signed up successfully"){
      this.router.navigate(['/login']);
    }
    else if(this.resp === "Username already exists"){
      this.flashMessagesService.show("Username exists, choose another", {cssClass:"alert alert-danger", timeout: 30000 });
    }
    else if(this.resp === "Email already exists"){
      this.flashMessagesService.show("Email already exists, go to sign in", {cssClass:"alert alert-danger", timeout: 30000 });
    }



    

  }

}
