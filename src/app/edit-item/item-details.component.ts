import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemForm: FormGroup;
  itemNo = 0;
  editMode = false;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.itemNo = +params.id;
      this.editMode = params.id != null;
      console.log('editMode - ' + this.editMode + ' ****  params ' + params.id + ' **** itemNo ' + this.itemNo);
      this.initForm();
    });
  }

  initForm() {
    // let tempName = '';
    // let tempAmount = 0;
    // let temppInventoryCode = '';

    if (this.editMode) {
      this.itemService.getItem(this.itemNo)
        .subscribe(responseItem => {
          // tempName = responseItem.name;
          // tempAmount = responseItem.amount;
          // temppInventoryCode = responseItem.inventoryCode;
          this.itemForm.controls.itemName.setValue(responseItem.name);
          this.itemForm.controls.inventoryCode.setValue(responseItem.inventoryCode);
          this.itemNo = responseItem.itemNo;
        });
    }
    this.itemForm = new FormGroup({
      itemName: new FormControl('', Validators.required),
      inventoryCode: new FormControl('', Validators.required),

    });
  }


  onSubmit() {
    const item = new Item(
      this.itemNo,
      this.itemForm.controls.itemName.value,
      0,
      this.itemForm.controls.inventoryCode.value);
    console.log(item);

    if (this.editMode) {
      this.itemService.updateItem(item).subscribe();
    } else {
      this.itemService.addItem(item).subscribe(res => {
        console.log(res);
      });
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../list']);
  }

  deleteItem() {
    this.itemService.deleteItem(this.itemNo).subscribe();
  }
}
