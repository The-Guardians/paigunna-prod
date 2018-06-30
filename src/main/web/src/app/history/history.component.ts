import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../../generated-model/model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  transaction : Transaction;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(){
    this.http.get<Transaction>('/api/transaction').subscribe(data => {
      console.log(data);
      this.transaction = data;
      console.log("transaction : "+this.transaction)
    })
  }

}
