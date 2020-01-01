import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../shared/item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../shared/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {



  items: Item[];
  private itemSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.itemSub = this.itemService.getAllItems().subscribe(res => {
      if (res){
        this.items.push();
      }
      this.items = res.body;
    });

  }


  ngOnDestroy() {
    if (this.itemSub) {
      this.itemSub.unsubscribe();
    }
  }


}



