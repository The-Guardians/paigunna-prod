import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalService} from "../cal-price/cal.service";
import {DataService} from "../data.service";
import {PaymentService} from "../payment/payment.service";
import {ConfirmService} from "../confirm/confirm.service";

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss']
})
export class SelectTypeComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  btnCallService: any;
  btnSelect: any;

  constructor(private cal: CalService, private data: DataService, private payment: PaymentService, private confirm: ConfirmService) {
  }

  ngOnInit() {
    this.btnSelect = true;
    this.data.statusPanel.subscribe(e => this.btnSelect = e);
    this.data.callService.subscribe(e => this.btnCallService = e);
    document.getElementById("waitingbtn").style.display = 'none';
    document.getElementById("incomebtn").style.display = 'none';
    document.getElementById("servicebtn").style.display = 'none';
    document.getElementById("warningSelect").style.display = 'block';
  }

  setMotor() {
    this.cal.setTypeMotor();
    this.btnCallService = false;
    this.data.setStatusbtnCall(false);
  }

  setTaxi() {
    this.cal.setTypeTaxi();
    this.btnCallService = false;
    this.data.setStatusbtnCall(false);
  }

  setNotice() {
    let check = this.payment.statusPayItem();
    if (check) {
      this.setNoticeCall();
    } else {
      this.setNoticePay();
    }
  }

  setNoticeCall() {
    this.myEvent.emit(null);
    this.data.changeMessage("Are you sure you want to call service ?");
    this.confirm.callBtn();
  }

  setNoticePay() {
    this.myEvent.emit(null);
    this.data.changeMessage("You have an outstanding balance. Please pay");
    this.confirm.payBtn();
  }

  setNoticeWait() {
    this.myEvent.emit(null);
    this.data.changeMessage("Are you sure you want to cancel service ?");
    this.confirm.waitBtn();
  }

  closeSelect() {
    this.data.panelStatus(true);
  }

  incomebtnsh() {
    document.getElementById("servicebtn").style.display = 'none';
    document.getElementById("waitingbtn").style.display = 'none';
    document.getElementById("callbtn").style.display = 'none';
    document.getElementById("incomebtn").style.display = 'block';
  }
}
