import { Injectable, isDevMode } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';
import { VestimonyApiConfig } from './vestimony-api-config';
import { AuthConstant } from '../auth/auth.constant';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserDataService {

  constructor(private http: HttpClient) { }

  async getCurrentUser() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem(AuthConstant.TOKEN_NAME)
    });


    const currentUser = this.http.get<ApplicationUser>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/users/currentuser", { headers });

    const userResponse = await currentUser.toPromise();

    return userResponse;

  }

  async editAccount(user: ApplicationUser){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem(AuthConstant.TOKEN_NAME)
    });


    const currentUser = this.http.put(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/users/edit", user, { headers, responseType:'text' });

    const userResponse = await currentUser.toPromise();

    return userResponse;
  }


  async setProfileImage(profileImage: File) {
    let fd: FormData = new FormData();
    fd.append('file', profileImage);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem(AuthConstant.TOKEN_NAME));

    const currentUser = this.http.post(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/users/image", fd, { headers, responseType: 'text' });

    const userResponse = await currentUser.toPromise();

    return userResponse;

  }

}

