import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Vestimonial } from '../models/vestimonial';

@Injectable({
  providedIn: 'root'
})
export class VestimonialDataService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('access_token')
  });
  
  constructor(private http: HttpClient) { }

  async createVestimonial(vestimonial: Vestimonial, postId: number, itemId: number){
    const vestimonialRequest = this.http.post("http://localhost:8080/vestimony/vestimonials/"+postId+"/"+itemId, vestimonial,{ headers : this.headers, responseType: 'text' });
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }

  async getUsersVestimonial(){
    const vestimonialRequest = this.http.get<Vestimonial[]>("http://localhost:8080/vestimony/vestimonials/currentuser", { headers : this.headers});
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }
}
