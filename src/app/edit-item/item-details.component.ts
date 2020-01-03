import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemForm: FormGroup;
  itemNo = 0;
  editMode = false;
  isOn = false;
  currentAmount: number;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.itemNo = +params.id;
      this.editMode = params.id != null;
      // console.log('editMode - ' + this.editMode + ' ****  params ' + params.id + ' **** itemNo ' + this.itemNo);
      this.initForm();
    });
  }

  initForm() {

    this.itemForm = new FormGroup({
      itemName: new FormControl('', Validators.required),
      amount: new FormControl(0, Validators.required),
      inventoryCode: new FormControl('', Validators.required)
    });
    if (this.editMode) {
      this.itemService.getItem(this.itemNo)
        .subscribe(responseItem => {
          this.itemForm.controls.itemName.setValue(responseItem.name);
          this.itemForm.controls.amount.setValue(responseItem.amount);
          this.itemForm.controls.inventoryCode.setValue(responseItem.inventoryCode);
          this.itemNo = responseItem.itemNo;
          this.currentAmount = responseItem.amount;
        });
    }


  }

  deleteItem() {
    this.itemService.deleteItem(this.itemNo).subscribe(res => { this.onCancel(); });
  }

  onSave() {
    const newItem = new Item(
      this.itemNo,
      this.itemForm.controls.itemName.value,
      this.itemForm.controls.amount.value,
      this.itemForm.controls.inventoryCode.value);

    if (this.editMode) {
      this.itemService.updateItem(newItem).subscribe();
    } else {
      this.itemService.addItem(newItem).subscribe();
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../list']);
  }

}
