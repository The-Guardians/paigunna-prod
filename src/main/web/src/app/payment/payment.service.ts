import {Injectable} from '@angular/core';
import {DataService} from "../data.service";
import {SelectService} from "../select-type/select.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  distance: number;
  price1: any;
  textTotalAmount: any;
  totalAmount: any;
  amount: number;

  constructor(private data: DataService, private select: SelectService) {
  }

  setAmount(amount: number) {
    this.amount = amount;
  }

  setTextOnItemPay() {
    document.getElementById("itemPay").style.display = 'block';
    this.price1 = document.getElementById('price1');
    this.textTotalAmount = document.getElementById('totalAmount');
    console.log(this.data.getDistance());
    this.distance = this.data.getDistance();
    let temp = ((0.0365) * this.amount) * 0.07;
    console.log(temp);
    console.log((0.0365) * this.amount + " => " + temp);
    this.totalAmount = ((((0.0365) * this.amount) + temp) + this.amount).toFixed(2);
    this.price1.innerHTML = 'Price : ' + this.amount + ' &#3647';
    this.textTotalAmount.innerHTML = 'Price(' + this.amount + ' &#3647) + Charge(3.65%+7%(7% of 3.65%))' + ' = ' + this.totalAmount + ' &#3647';
    document.getElementById('totalTravel').innerHTML = 'item #1 (  ' + this.distance + ' km)';
    document.getElementById('destination').innerHTML = this.data.getPlaceName();
  }

  clearPay() {
    this.data.panelStatus(false);
    this.select.callbtnsh();
    this.data.setCall(true);
    document.getElementById('itemPay').style.display = 'none';
    this.price1.innerHTML = "";
    this.textTotalAmount.innerHTML = "";
    document.getElementById('totalTravel').innerHTML = "";
    document.getElementById('destination').innerHTML = "";
  }

  statusPayItem() {
    if (document.getElementById('itemPay').style.display == 'none') {
      return true;
    } else {
      return false;
    }
  }

}
