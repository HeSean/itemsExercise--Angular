import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/shared/item.service';
import { ItemDetailsComponent } from '../item-details.component';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-update-amount',
  templateUrl: './update-amount.component.html',
  styleUrls: ['./update-amount.component.scss']
})
export class UpdateAmountComponent implements OnInit {

  amountForm: FormGroup;
  newAmount: number;
  @Input() currentAmount: number;
  @Input() itemNo: number;



  constructor(
    @Inject(ItemDetailsComponent) private parent: ItemDetailsComponent,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.amountForm = new FormGroup({
      newAmount: new FormControl(1, Validators.required),
    });
  }

  deposit() {
    this.newAmount = this.amountForm.controls.newAmount.value;
    this.itemService.depositAmount(this.itemNo, this.newAmount).subscribe(() => { this.onCancel(); });
  }

  withdraw() {
    this.newAmount = this.amountForm.controls.newAmount.value;
    if (this.newAmount > this.currentAmount) {
      alert('cannot withdraw that amount');
    } else {
      this.itemService.withdrawAmount(this.itemNo, this.newAmount).subscribe(() => { this.onCancel(); });
    }
  }

  onCancel() {
    this.router.navigate(['../list']);
  }


}

