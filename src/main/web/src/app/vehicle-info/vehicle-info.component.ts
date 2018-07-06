import {Component, OnInit} from '@angular/core';
import * as angular from "angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  postApp: any = angular.module('postApp', []);
  url: any;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  //test
  submitForm() {
    // this.http.post('/api/vehicle',null);
    this.postApp.controller('postController', function ($scope, $http) {
      $scope.submitForm = function () {
        $http({
          method: 'POST',
          url: this.url,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: function (obj) {
            let str = [];
            for (let p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          data: {license: $scope.license, province: $scope.province, brand: $scope.brand}
        }).success(function () {
        });
      };
    });
  }

}
