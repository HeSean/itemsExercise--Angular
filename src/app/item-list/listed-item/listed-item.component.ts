import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-listed-item',
  templateUrl: './listed-item.component.html',
  styleUrls: ['./listed-item.component.scss']
})
export class ListedItemComponent implements OnInit {


  @Input() item: Item;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
