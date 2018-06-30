import {Injectable} from '@angular/core';
import {DataService} from "../data.service";
import {PaymentService} from "../payment/payment.service";


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
  amount: number;
  pay: number;

  constructor(private data: DataService, private payment: PaymentService) {
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
    this.price2.innerHTML = 'Price : ' + this.amount + ' &#3647';
    this.payment.setAmount(this.amount);
  }
}
