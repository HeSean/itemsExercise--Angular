export class Item {
  itemNo: number;
  name: string;
  amount: number;
  inventoryCode: string;

  constructor(itemNo, name, amount, inventoryCode){
    this.itemNo = itemNo;
    this.name = name;
    this.amount = amount;
    this.inventoryCode = inventoryCode;
  }
}
