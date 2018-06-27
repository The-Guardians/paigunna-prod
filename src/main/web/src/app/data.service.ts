import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  distanceTotal: number;
  statusbtnCall: boolean = true;
  namePlace: string;

  private messageConfirm = new BehaviorSubject('default message');
  currentMessage = this.messageConfirm.asObservable();


  constructor() {
  }

  changeMessage(message: string) {
    this.messageConfirm.next(message);
  }

  setDistance(distance: number) {
    this.distanceTotal = distance;
    console.log(distance);
  }

  getDistance() {
    console.log(this.distanceTotal);
    return this.distanceTotal;
  }

  setStatusbtnCall(status: boolean) {
    this.statusbtnCall = status;
    console.log(status);
  }

  getStatusbtnCall() {
    console.log(this.statusbtnCall);
    return this.statusbtnCall;

  }

  setPlaceName(name:string) {
    this.namePlace = name;
    console.log(name);
  }

  getPlaceName() {
    console.log(this.namePlace);
    return this.namePlace;

  }

}
