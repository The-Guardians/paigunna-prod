import { Component, OnInit } from '@angular/core';
import {AuthService} from "../providers/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string ;
  useremail : string;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(e=>{
      this.username = e.displayName;
    });
  }

  loginGoogle(){
    this.authService.loginWithGoogle();
    this.authService.afAuth.authState.subscribe(e=>{
      this.username = e.displayName;
    });
  }

  loginFacebook(){
    this.authService.loginWithFacebook();
  }

  logout(){
    this.authService.logout();
  }

  printUser(){
      this.authService.afAuth.authState.subscribe(e=>{
        console.log("authState : " + e.isAnonymous);
      });
    }

}
