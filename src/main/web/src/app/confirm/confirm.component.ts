import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../providers/auth.service";
import {DataService} from '../data.service';
import {PaymentService} from "../payment/payment.service";
import {SelectService} from "../select-type/select.service";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  textConfirm: string;

  constructor(public authService: AuthService, private data: DataService,private payment:PaymentService,private select:SelectService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(e => this.textConfirm = e);
  }

  paymentText(){
    this.data.panelStatus(true);
    this.payment.setTextOnItemPay();
  }

  logout() {
    this.authService.logout();
    document.getElementById('logo').style.display = 'none';
    document.getElementById('loginGooglebtn').style.display = 'block';
    document.getElementById('name').style.display = 'none';
  }

  callbtnsh(){
    this.payment.clearPay();
    this.select.callbtnsh();
  }

  waitbtnsh(){
    this.select.waitbtnsh();
  }

}
