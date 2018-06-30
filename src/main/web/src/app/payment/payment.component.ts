import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {SelectService} from "../select-type/select.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  distance: number;
  price1: any;
  textTotalAmount: any;

  constructor(private data: DataService, private select: SelectService, private http: HttpClient) {
  }

  ngOnInit() {
    this.price1 = document.getElementById('price1');
    this.textTotalAmount = document.getElementById('totalAmount');
    document.getElementById('itemPay').style.display = 'none';
  }


  clearTextOnItemPay() {
    this.price1.innerHTML = "";
    this.textTotalAmount.innerHTML = "";
    document.getElementById('totalTravel').innerHTML = "";
    document.getElementById('destination').innerHTML = "";
  }

  payItem1() {
    this.data.panelStatus(false);
    this.select.callbtnsh();
    this.data.setCall(true);
    document.getElementById('itemPay').style.display = 'none';
    this.clearTextOnItemPay();
  }

  omisePayment(){

  }

//   btnOmises(){
//     let pay = this.totalAmount * 100;
//       this.OmiseCard.configure({
//         publicKey: 'pkey_test_5afuh3yxu16m5ih76xb',
//         image: 'https://www.picz.in.th/images/2018/05/28/znlQ1k.png',
//         amount: 156233,
//         submitFormTarget: '#from-pay'
//       });
// // Configuring your own custom button
//       this.OmiseCard.configureButton('#pay-button', {
//         frameLabel: 'Paigunna',
//         submitLabel: 'PAY RIGHT NOW !'
//       });
//       this.OmiseCard.attach();
//   }

}
