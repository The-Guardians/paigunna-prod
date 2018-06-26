import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../providers/auth.service";
import {DataService} from '../data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  idConfirm: string;
  textConfirm: string;

  constructor(public authService: AuthService, private data: DataService) {
  }

  ngOnInit() {
    this.data.idCon.subscribe(e => this.idConfirm = e);
    this.data.currentMessage.subscribe(e => this.textConfirm = e);
  }

  logout() {
    this.authService.logout();
    document.getElementById('logo').style.display = 'none';
    document.getElementById('loginGooglebtn').style.display = 'block';
    document.getElementById('name').style.display = 'none';
  }

}
