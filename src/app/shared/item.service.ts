import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private getItemUrl = 'http://localhost:8080/item/getItem?itemNo=';
  private getAllItemsUrl = 'http://localhost:8080/item/getAllItems';
  private addItemUrl = 'http://localhost:8080/item/addItem';
  private updateUrl = 'http://localhost:8080/item/updateItem';
  private deleteItemUrl = 'http://localhost:8080/item/deleteItem?itemNo=';
  private withdrawUrl = 'http://localhost:8080/item/withdrawItemAmount?itemNo=';
  private depositUrl = 'http://localhost:8080/item/depositItemAmount?itemNo=';




  constructor(private http: HttpClient) {  }


  getItem(itemNo: number) {
    return this.http.get<Item>(this.getItemUrl + itemNo);
  }

  getAllItems() {
    return this.http.get<Item[]>(this.getAllItemsUrl, { observe: 'response', responseType: 'json' });
  }

  addItem(item: Item) {
    return this.http.post<Item>(this.addItemUrl, item, { observe: 'response', responseType: 'json' });
  }

  updateItem(item: Item) {
    return this.http.post<Item>(this.updateUrl, item, { observe: 'response', responseType: 'json' });
  }

  deleteItem(itemNo: number) {
    return this.http.delete(this.deleteItemUrl + itemNo, { observe: 'response', responseType: 'json' });
  }

  withdrawAmount(itemNo, amount) {
    return this.http.put(this.withdrawUrl + itemNo + '&amount=' + amount, { observe: 'response', responseType: 'json' });
  }

  depositAmount(itemNo, amount) {
    return this.http.put(this.depositUrl + itemNo + '&amount=' + amount, { observe: 'response', responseType: 'json' });
  }








}
