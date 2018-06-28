import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  callbtnsh(){
    document.getElementById("incomebtn").style.display = 'none';
    document.getElementById("servicebtn").style.display = 'none';
    document.getElementById("waitingbtn").style.display = 'none';
    document.getElementById("callbtn").style.display = 'block';
  }

  waitbtnsh(){
    document.getElementById("servicebtn").style.display = 'block';
    document.getElementById("callbtn").style.display = 'none';
    document.getElementById("waitingbtn").style.display = 'block';
  }

}
