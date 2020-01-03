import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/shared/item.service';


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
    private itemService: ItemService, private router: Router) { }

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
      alert('Cannot withdraw that amount, limit is ' +  this.currentAmount);
    } else {
      this.itemService.withdrawAmount(this.itemNo, this.newAmount).subscribe(() => { this.onCancel(); });
    }
  }

  onCancel() {
    this.router.navigate(['../list']);
  }
}

