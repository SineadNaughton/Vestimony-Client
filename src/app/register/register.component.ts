import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../services/models/application-user';
import { ProfileDataService } from '../services/vestimony-api/profile-data.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

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

  }

}
