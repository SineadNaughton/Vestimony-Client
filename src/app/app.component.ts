import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from './services/auth/auth-user.service';
import { AuthConstant } from './services/auth/auth.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vestimony-angular-app';

  constructor(
    private router: Router,
    private userService: AuthUserService
  ) { }

  onInit(){
  }
  //check if a user is signed in (if there is an auth token) to see if nav should be displayed
  isSignedIn(){
    if(localStorage.getItem(AuthConstant.TOKEN_NAME) != null){
     return true;
    }
    else{
      return false;
    }
  }

}
