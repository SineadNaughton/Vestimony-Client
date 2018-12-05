import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Vestimonial } from '../models/vestimonial';
import { VestimonyApiConfig } from './vestimony-api-config';

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
    const vestimonialRequest = this.http.post(VestimonyApiConfig.BASE_URL + "/vestimony/vestimonials/"+postId+"/"+itemId, vestimonial,{ headers : this.headers, responseType: 'text' });
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }

  async getUsersVestimonial(){
    const vestimonialRequest = this.http.get<Vestimonial[]>(VestimonyApiConfig.BASE_URL + "/vestimony/vestimonials/currentuser", { headers : this.headers});
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }

  async getItemVestimonials(itemId: number){
    const vestimonialRequest = this.http.get<Vestimonial[]>(VestimonyApiConfig.BASE_URL + "/vestimony/vestimonials/items/"+itemId, { headers : this.headers});
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }

 

  async linkVestimonial(vestimonialId: number, postId: number){
    const vestimonialRequest = this.http.post(VestimonyApiConfig.BASE_URL + "/vestimony/vestimonials/"+vestimonialId+"/link/"+postId, {}, { headers : this.headers, responseType: 'text' });
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }

  async getVestimonial(vestimonialId: number){
    const vestimonialRequest = this.http.get<Vestimonial>(VestimonyApiConfig.BASE_URL + "/vestimony/vestimonials/"+vestimonialId, { headers : this.headers });
    const vestimonialResponse = await vestimonialRequest.toPromise();
    return vestimonialResponse;
  }
}
