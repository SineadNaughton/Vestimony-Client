import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private http: HttpClient) { }

  async getItemData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });

    const itemRequest  = this.http.get<Item[]>("http://localhost:8080/vestimony/items", {headers});
    const itemResponse = await itemRequest.toPromise();
    return itemResponse;
  }
}
