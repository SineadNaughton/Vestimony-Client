import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthConstant } from './auth.constant';
import { VestimonyApiConfig } from '../vestimony-api/vestimony-api-config';

@Injectable()
export class AuthUserService {
  private _accessToken: string;


  constructor(private _jwtHelper: JwtHelperService) { }

  storeToken(accessToken: string) {    
    const decodedToken = this._jwtHelper.decodeToken(accessToken);
    this._accessToken = accessToken;
    localStorage.setItem(AuthConstant.TOKEN_NAME, accessToken);
    VestimonyApiConfig.AccessToken = accessToken;
  }

  destroyAcessToken() {
    this._accessToken = null;
    localStorage.removeItem(AuthConstant.TOKEN_NAME);
  }


  isExpired(): boolean {
    return this._jwtHelper.isTokenExpired(this._accessToken);
  }

  
}