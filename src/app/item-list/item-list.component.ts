import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.itemService.getAllItems().subscribe(res => {
      this.items = res.body;
    });
  }




}



