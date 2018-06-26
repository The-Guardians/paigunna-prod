import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {AuthService} from "../providers/auth.service";
import {CalService} from "../cal-price/cal.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  username: string;
  useremail: string;
  idConfirm: string;
  textConfirm: string;
  photo: any;

  constructor(public authService: AuthService, private data: DataService,private cal: CalService) {
  }

  ngOnInit() {
    this.getDisplayName();
    this.data.idCon.subscribe(e => this.idConfirm = e);
    this.data.currentMessage.subscribe(e => this.textConfirm = e);
  }

  private getDisplayName() {
    this.authService.afAuth.authState.subscribe(e => {
      if (e != null) {
        this.username = e.displayName;
        this.useremail = e.email;
        this.photo = e.photoURL;
        document.getElementById('name').style.display = 'block';
        document.getElementById('loginGooglebtn').style.display = 'none';
        document.getElementById('logo').style.display = 'block';
      } else {
        document.getElementById('logo').style.display = 'none';
      }
    });
  }

  setMotor(){
    this.cal.setTypeMotor();
  }

  setTaxi(){
    this.cal.setTypeTaxi();
  }

  loginGoogle() {
    let userResult = this.authService.loginWithGoogle();
    userResult.subscribe(e => {
      if (e != null) {
        this.username = e.displayName;
        this.useremail = e.email;
        this.photo = e.photoURL;
        document.getElementById('name').style.display = 'block';
        document.getElementById('loginGooglebtn').style.display = 'none';
        document.getElementById('logo').style.display = 'block';
      }
    });
  }

  loginFacebook() {
    this.authService.loginWithFacebook();
  }

  printUser() {
    this.authService.afAuth.authState.subscribe(e => {
      console.log("authState : " + e.isAnonymous);
    });
  }

  setNoticeLogout() {
    this.myEvent.emit(null);
    this.data.changeMessage("logoutConfirm", "Are you sure you want to log out?");
  }

}
