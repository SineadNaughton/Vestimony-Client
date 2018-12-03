import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('access_token')
  });

  private readonly headersPlainText = new HttpHeaders({
    'Content-Type': 'text/plain',
    'Authorization': localStorage.getItem('access_token')
  });

  constructor(private http: HttpClient) { }

  async getFilteredItemData(brand: string, category:string, name: string){
    const itemRequest = this.http.get<Item[]>("http://localhost:8080/vestimony/items/filter?brand="+brand+"&category="+category+"&name="+name, { headers : this.headers });
    const itemResponse = await itemRequest.toPromise();
    return itemResponse;
  }

  async getNewest() {
    const itemRequest = this.http.get<Item[]>("http://localhost:8080/vestimony/items/new", { headers : this.headers });
    const itemResponse = await itemRequest.toPromise();
    return itemResponse;
  }

  async getItemData() {
    const itemRequest = this.http.get<Item[]>("http://localhost:8080/vestimony/items", { headers : this.headers });
    const itemResponse = await itemRequest.toPromise();
    return itemResponse;
  }

  async getItem(itemId: number){
    const itemRequest = this.http.get<Item>("http://localhost:8080/vestimony/items/"+itemId, { headers : this.headers });
    const itemResponse = await itemRequest.toPromise();
    return itemResponse;
  }

  async getSavedItems() {
    const savedItemsRequest = this.http.get<Item[]>("http://localhost:8080/vestimony/saveditems", { headers : this.headers });
    const savedItemsResponse = await savedItemsRequest.toPromise();
    return savedItemsResponse;
  }

  async  isSaved(itemId: number) {
    const isSavedRequest = this.http.get<boolean>("http://localhost:8080/vestimony/saveditems/issaved/" + itemId, { headers : this.headers });
    const isSavedResponse = await isSavedRequest.toPromise();
    return isSavedResponse;
  }

  async saveItem(itemId: number) {
    const saveRequest = this.http.post("http://localhost:8080/vestimony/saveditems/" + itemId, {}, { headers: this.headers, responseType: 'text' as 'text' });
    const saveResponse = await saveRequest.toPromise();
    return saveResponse.toString();
  }

  async unsaveItem(itemId: number) {
    const unsaveRequest = this.http.delete("http://localhost:8080/vestimony/saveditems/" + itemId, { headers : this.headers, responseType: 'text' });
    const unsaveResponse = await unsaveRequest.toPromise();
    return unsaveResponse;
  }

  async getTopRated(){
    const itemRequest = this.http.get<Item[]>("http://localhost:8080/vestimony/items/toprated", { headers : this.headers });
    const itemResponse = await itemRequest.toPromise();
    return itemResponse;
  }

  
  async linkToBuyThroughVestimonial(itemId: number, userId: number){
    this.http.post("http://localhost:8080/vestimony/items/linktobuy/"+itemId+ "?userId="+"userId", { headers : this.headers });
  }

  async linkToBuyThroughItem(itemId: number){
    const itemRequest = this.http.post("http://localhost:8080/vestimony/items/linktobuy/"+itemId, { headers : this.headers });
   
  }

  

}
