import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.getUser();
  }

  HttpClient = function () {
    this.get = function (aUrl, aCallback) {
      let anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function () {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
          aCallback(anHttpRequest.responseText);
      };

      anHttpRequest.open("GET", aUrl, true);
      anHttpRequest.send(null);
    }
  };

  getUser() {
    let client = new this.HttpClient();
    client.get('/api/user', function (response) {

      let dataOfQuery = JSON.parse(response);
      let col = [];
      for (let i = 0; i < dataOfQuery.length; i++) {
        for (let key in dataOfQuery[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }

      // CREATE DYNAMIC TABLE.
      let table = document.createElement("table");

      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

      let tr = table.insertRow(-1);                   // TABLE ROW.

      for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
      }

      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (let i = 0; i < dataOfQuery.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = dataOfQuery[i][col[j]];
        }
      }

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      let divContainer = document.getElementById("historyData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      console.log("Create table history success")
    });
  }

}
