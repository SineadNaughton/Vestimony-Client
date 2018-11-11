import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthConstant } from './auth.constant';

@Injectable()
export class AuthUserService {
  private _accessToken: string;
  private _isAdmin: boolean;

  constructor(
    private _jwtHelper: JwtHelperService
  ) { }

  login(accessToken: string) {    
    const decodedToken = this._jwtHelper.decodeToken(accessToken);

    this._isAdmin = false; //decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this._accessToken = accessToken;

    localStorage.setItem(AuthConstant.TOKEN_NAME, accessToken);
  }

  logout() {
    this._accessToken = null;
    this._isAdmin = false;
    localStorage.removeItem(AuthConstant.TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this._isAdmin;
  }

  isUser(): boolean {
    return this._accessToken && !this._isAdmin;
  }

  isExpired(): boolean {
    return this._jwtHelper.isTokenExpired(this._accessToken);
  }

  
}