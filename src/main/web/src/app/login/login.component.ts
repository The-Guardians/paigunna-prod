import {Component, OnInit} from '@angular/core';
import {AuthService} from "../providers/auth.service";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  useremail: string;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.getDisplayName();
  }

  private getDisplayName() {
    this.authService.afAuth.authState.subscribe(e => {
      this.username = e.displayName;
      this.useremail = e.email;
      if (this.username != null) {
        document.getElementById('loginGooglebtn').style.display = 'none';
      }
    });
  }

  // setMotor(){
  //   this.motor.setTypeMotor();
  // }
  //
  // setTaxi(){
  //   this.motor.setTypeTaxi();
  // }

  loginGoogle() {
    let userResult = this.authService.loginWithGoogle();
    userResult.subscribe(e => {
      if (e != null) {
        this.username = e.displayName;
        this.useremail = e.email;
        document.getElementById('loginGooglebtn').style.display = 'none';
      }
    });
  }

  loginFacebook() {
    this.authService.loginWithFacebook();
  }

  logout() {
    this.authService.logout();
    document.getElementById('name').innerHTML = "";
  }

  printUser() {
    this.authService.afAuth.authState.subscribe(e => {
      console.log("authState : " + e.isAnonymous);
    });
  }

}
