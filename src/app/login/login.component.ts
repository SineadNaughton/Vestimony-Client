import { Component, OnInit } from '@angular/core';

import { AuthRequestBody } from '../services/auth/auth.request-body';
import { AuthTokenService } from '../services/auth/auth-token.service';
import { AuthUserService } from '../services/auth/auth-user.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authRequestBody: AuthRequestBody = new AuthRequestBody();


  constructor(private authTokenService: AuthTokenService, 
    private authUserService: AuthUserService,
    private router: Router
    ) {

  }


  ngOnInit(): void {

  }

  async loginUser() {
    const authToken = await this.authTokenService.getAuthToken(this.authRequestBody.username, this.authRequestBody.password);
    this.authUserService.login(authToken);
    this.router.navigate(['/home']);
  }




}