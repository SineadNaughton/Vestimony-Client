import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';
import { VestimonyApiConfig } from './vestimony-api-config';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('access_token')
  });

  constructor(private http: HttpClient) { }

  async getProfile(profileId: number){
    const profileRequest = this.http.get<ApplicationUser>(VestimonyApiConfig.BASE_URL + "/vestimony/users/profiles/"+profileId, { headers : this.headers });
    const profileResponse = await profileRequest.toPromise();
    return profileResponse;
  }

  async getProfileSearch(username: string){
    const profileRequest = this.http.get<ApplicationUser[]>(VestimonyApiConfig.BASE_URL + "/vestimony/users/profiles/search/"+username, { headers : this.headers });
    const profileResponse = await profileRequest.toPromise();
    return profileResponse;
  }

  //CHECK IF FOLLOWING PROFILE
  async isFollowing(userId: number){
  const profileRequest = this.http.get<boolean>(VestimonyApiConfig.BASE_URL + "/vestimony/follow/isfollowing/"+userId, { headers : this.headers });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}

//follow
async follow(userId: number){
  const profileRequest = this.http.get(VestimonyApiConfig.BASE_URL + "/vestimony/follow/"+userId, { headers : this.headers, responseType: 'text' });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}


//unfollow
async unfollow(userId: number){
  const profileRequest = this.http.delete(VestimonyApiConfig.BASE_URL + "/vestimony/follow/"+userId, { headers : this.headers, responseType: 'text' });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}

//REGISTER
async register(user: ApplicationUser){  
  const profileRequest = this.http.post(VestimonyApiConfig.BASE_URL + "/vestimony/users", user, 
  { headers: { 'Content-Type': 'application/json' }, responseType: 'text' });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}

}
