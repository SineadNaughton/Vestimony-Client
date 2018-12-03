import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';

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
    const profileRequest = this.http.get<ApplicationUser>("http://localhost:8080/vestimony/users/profiles/"+profileId, { headers : this.headers });
    const profileResponse = await profileRequest.toPromise();
    return profileResponse;
  }

  async getAllProfiles(){
    const profileRequest = this.http.get<ApplicationUser[]>("http://localhost:8080/vestimony/users/profiles", { headers : this.headers });
    const profileResponse = await profileRequest.toPromise();
    return profileResponse;
  }

  //CHECK IF FOLLOWING PROFILE
  async isFollowing(userId: number){
  const profileRequest = this.http.get<boolean>("http://localhost:8080/vestimony/follow/isfollowing/"+userId, { headers : this.headers });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}

//follow
async follow(userId: number){
  const profileRequest = this.http.get("http://localhost:8080/vestimony/follow/"+userId, { headers : this.headers, responseType: 'text' });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}


//unfollow
async unfollow(userId: number){
  const profileRequest = this.http.delete("http://localhost:8080/vestimony/follow/"+userId, { headers : this.headers, responseType: 'text' });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}

//REGISTER
async register(user: ApplicationUser){  
  const profileRequest = this.http.post("http://localhost:8080/vestimony/users", user, { headers: { 'Content-Type': 'application/json' }, responseType: 'text' });
  const profileResponse = await profileRequest.toPromise();
  return profileResponse;
}

}
