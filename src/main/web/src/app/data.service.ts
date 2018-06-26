import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  distanceTotal:number;

  private idConfirm = new BehaviorSubject('default id');
  private messageConfirm = new BehaviorSubject('default message');
  idCon = this.idConfirm.asObservable();
  currentMessage = this.messageConfirm.asObservable();


  constructor() {
  }

  changeMessage(id:string,message: string) {
    this.idConfirm.next(id);
    this.messageConfirm.next(message);
  }

  setDistance(distance:number){
    this.distanceTotal = distance;
    console.log(distance);
  }

  getDistance(){
    return this.distanceTotal;
  }

}
