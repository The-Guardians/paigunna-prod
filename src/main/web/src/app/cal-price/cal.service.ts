import {Injectable} from '@angular/core';
import {DataService} from "../data.service";


@Injectable({
  providedIn: 'root'
})
export class CalService {

  distance: number;
  type: any;
  priceMotor: number;
  rate: number;
  price1: any;
  price2: any;
  textTotalAmount: any;
  totalAmount: any;
  amount: number;
  pay: number;

  constructor(private data: DataService) {
  }

  distanceFunc() {
    return this.data.getDistance();
  }

  setTypeMotor() {
    this.distance = this.distanceFunc();
    this.type = "motor";
    if (this.distance <= 1.0) {
      this.priceMotor = 10;
    } else if (this.distance <= 1.3) {
      this.priceMotor = 15;
    } else if (this.distance <= 1.6) {
      this.priceMotor = 20;
    } else if (this.distance <= 2.0) {
      this.priceMotor = 25;
    } else if (this.distance <= 3.0) {
      this.priceMotor = 30;
    } else if (this.distance <= 4.0) {
      this.priceMotor = 35;
    } else if (this.distance <= 5.0) {
      this.priceMotor = 40;
    } else if (this.distance > 5.0) {
      this.rate = 10;
    }
    console.log(1);
    this.calPrice(0, this.rate, this.type);
  }

  setTypeTaxi() {
    this.distance = this.distanceFunc();
    this.type = "taxi";
    if (this.distance <= 1.0) {
      this.rate = 0;
    } else if (this.distance > 1.0 && this.distance <= 10.0) {
      this.rate = 5.5;
    } else if (this.distance > 10.0 && this.distance <= 20.0) {
      this.rate = 6.5;
    } else if (this.distance > 20.0 && this.distance <= 40.0) {
      this.rate = 7.5;
    } else if (this.distance > 40.0 && this.distance <= 60.0) {
      this.rate = 8.0;
    } else if (this.distance > 60.0 && this.distance <= 80.0) {
      this.rate = 9.0;
    } else if (this.distance > 80.0) {
      this.rate = 10.5;
    }
    this.calPrice(35, this.rate, this.type);
  }

  calPrice(start, rate, type) {
    this.price1 = document.getElementById('price1');
    this.price2 = document.getElementById('price2');
    this.textTotalAmount = document.getElementById('totalAmount');
    if (this.price2 != "") {
      this.price2.innerHTML = "";
    }
    if (type == "motor" && this.distance <= 5.0) {
      this.amount = this.priceMotor;
    } else {
      this.amount = ((this.distance * rate) + start);
    }
    let temp = ((0.0365) * this.amount) * 0.07;
    console.log(temp);
    console.log((0.0365) * this.amount + " => " + temp);
    this.totalAmount = ((((0.0365) * this.amount) + temp) + this.amount).toFixed(2);
    this.price2.innerHTML = 'Price : ' + this.amount + ' &#3647';

  }

  setTextOnItemPay() {
    this.distance = this.distanceFunc();
    if (document.getElementById('itemPay').style.display != 'block') {
      this.price1.innerHTML = 'Price : ' + this.amount + ' &#3647';
      this.textTotalAmount.innerHTML = 'Price(' + this.amount + ' &#3647) + Charge(3.65%+7%(7% of 3.65%))' + ' = ' + this.totalAmount + ' &#3647';
      document.getElementById('totalTravel').innerHTML = 'item #1 (  ' + this.distance + ' km)';
      // document.getElementById('destination').innerHTML = desName;
//       var pay = totalAmount * 100;
//       OmiseCard.configure({
//         publicKey: 'pkey_test_5afuh3yxu16m5ih76xb',
//         image: 'https://www.picz.in.th/images/2018/05/28/znlQ1k.png',
//         amount: pay,
//         submitFormTarget: '#from-pay'
//       });
// // Configuring your own custom button
//       OmiseCard.configureButton('#pay-button', {
//         frameLabel: 'Paigunna',
//         submitLabel: 'PAY RIGHT NOW !'
//       });
//       OmiseCard.attach();
    }
  }


  clearTextOnItemPay() {
    this.price1.innerHTML = "";
    this.textTotalAmount.innerHTML = "";
    document.getElementById('totalTravel').innerHTML = "";
    document.getElementById('destination').innerHTML = "";
  }

  payItem() {
    document.getElementById('itemPay').style.display = 'none';
    this.clearTextOnItemPay();
  }

}
