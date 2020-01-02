import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Item } from './item.model';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';


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


  itemsChanged = new Subject<Item[]>();


  constructor(private http: HttpClient, private router: Router) {

   }


  getItem(itemNo: number) {
    return this.http.get<Item>(this.getItemUrl + itemNo);
  }

  getAllItems() {
    return this.http.get<Item[]>(this.getAllItemsUrl, { observe: 'response', responseType: 'json' });
  }

  addItem(item: Item) {
    return this.http.post<Item>(this.addItemUrl, item);
  }

  updateItem(item: Item) {
    return this.http.post<Item>(this.updateUrl, item, { observe: 'response', responseType: 'json' });
  }

  deleteItem(itemNo: number) {
    return this.http.delete(this.deleteItemUrl + itemNo, { observe: 'response', responseType: 'json' });
  }

  withdrawAmount(itemNo, amount) {
    return this.http.put(this.withdrawUrl + itemNo + '?amount=' + amount, { observe: 'response', responseType: 'json' });
  }

  depositAmount(itemNo, amount) {
    return this.http.put(this.depositUrl + itemNo + '?amount=' + amount, { observe: 'response', responseType: 'json' });
  }








}
