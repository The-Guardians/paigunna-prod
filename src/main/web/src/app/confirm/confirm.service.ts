import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor() {
  }

  logoutBtn() {
    document.getElementById('callBtn').style.display = "none";
    document.getElementById('payBtn').style.display = "none";
    document.getElementById('logOutBtn').style.display = "block";
  }

  callBtn(){
    document.getElementById('logOutBtn').style.display = "none";
    document.getElementById('payBtn').style.display = "none";
    document.getElementById('callBtn').style.display = "block";
  }

  payBtn(){
    document.getElementById('logOutBtn').style.display = "none";
    document.getElementById('callBtn').style.display = "none";
    document.getElementById('payBtn').style.display = "block";
  }
}
