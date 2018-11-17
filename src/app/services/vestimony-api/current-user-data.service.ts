import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserDataService {

  constructor(private http: HttpClient) { }

  async getCurrentUser() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });


    const currentUser = this.http.get<ApplicationUser>("http://localhost:8080/vestimony/users/currentuser", { headers });

    const userResponse = await currentUser.toPromise();

    return userResponse;

  }


  async setProfileImage(profileImage: File) {
    let fd: FormData = new FormData();
    fd.append('file', profileImage);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('access_token'));

    const currentUser = this.http.post("http://localhost:8080/vestimony/users/image", fd, { headers, responseType: 'text' });

    const userResponse = await currentUser.toPromise();

    return userResponse;

  }

}

