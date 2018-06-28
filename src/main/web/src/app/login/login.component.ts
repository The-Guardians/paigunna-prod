import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {AuthService} from "../providers/auth.service";
import {ConfirmService} from "../confirm/confirm.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  username: string;
  useremail: string;
  textConfirm: string;
  photo: any;


  constructor(public authService: AuthService, private data: DataService,private confirm:ConfirmService) {
  }

  ngOnInit() {
    this.getDisplayName();
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
    this.data.changeMessage("Are you sure you want to log out?");
    this.confirm.logoutBtn();
  }

}
