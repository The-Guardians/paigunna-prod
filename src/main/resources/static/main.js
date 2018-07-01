(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n  /*width: 100%;*/\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.lat = 54.000;
        this.lng = 1.00;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _starter_starter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter/starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var _starter_starter_nav_starter_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter/starter-nav/starter-nav.component */ "./src/app/starter/starter-nav/starter-nav.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _cal_price_cal_price_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cal-price/cal-price.component */ "./src/app/cal-price/cal-price.component.ts");
/* harmony import */ var _select_type_select_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./select-type/select-type.component */ "./src/app/select-type/select-type.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                _starter_starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"],
                _starter_starter_nav_starter_nav_component__WEBPACK_IMPORTED_MODULE_6__["StarterNavComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"],
                _cal_price_cal_price_component__WEBPACK_IMPORTED_MODULE_18__["CalPriceComponent"],
                _select_type_select_type_component__WEBPACK_IMPORTED_MODULE_19__["SelectTypeComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_20__["PaymentComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_21__["HistoryComponent"],
            ],
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _starter_starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"],
                        data: { title: 'หน้าหลัก', iconClass: 'fa fa-home' },
                        children: []
                    }
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_providers_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cal-price/cal-price.component.html":
/*!****************************************************!*\
  !*** ./src/app/cal-price/cal-price.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cal-price works!\n</p>\n"

/***/ }),

/***/ "./src/app/cal-price/cal-price.component.scss":
/*!****************************************************!*\
  !*** ./src/app/cal-price/cal-price.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cal-price/cal-price.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cal-price/cal-price.component.ts ***!
  \**************************************************/
/*! exports provided: CalPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalPriceComponent", function() { return CalPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalPriceComponent = /** @class */ (function () {
    function CalPriceComponent() {
    }
    CalPriceComponent.prototype.ngOnInit = function () {
    };
    CalPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cal-price',
            template: __webpack_require__(/*! ./cal-price.component.html */ "./src/app/cal-price/cal-price.component.html"),
            styles: [__webpack_require__(/*! ./cal-price.component.scss */ "./src/app/cal-price/cal-price.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalPriceComponent);
    return CalPriceComponent;
}());



/***/ }),

/***/ "./src/app/cal-price/cal.service.ts":
/*!******************************************!*\
  !*** ./src/app/cal-price/cal.service.ts ***!
  \******************************************/
/*! exports provided: CalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalService", function() { return CalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _payment_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment/payment.service */ "./src/app/payment/payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalService = /** @class */ (function () {
    function CalService(data, payment) {
        this.data = data;
        this.payment = payment;
    }
    CalService.prototype.distanceFunc = function () {
        return this.data.getDistance();
    };
    //merge
    CalService.prototype.setTypeMotor = function () {
        this.distance = this.distanceFunc();
        this.type = "motor";
        if (this.distance <= 1.0) {
            this.priceMotor = 10;
        }
        else if (this.distance <= 1.3) {
            this.priceMotor = 15;
        }
        else if (this.distance <= 1.6) {
            this.priceMotor = 20;
        }
        else if (this.distance <= 2.0) {
            this.priceMotor = 25;
        }
        else if (this.distance <= 3.0) {
            this.priceMotor = 30;
        }
        else if (this.distance <= 4.0) {
            this.priceMotor = 35;
        }
        else if (this.distance <= 5.0) {
            this.priceMotor = 40;
        }
        else if (this.distance > 5.0) {
            this.rate = 10;
        }
        this.calPrice(0, this.rate, this.type);
    };
    CalService.prototype.setTypeTaxi = function () {
        this.distance = this.distanceFunc();
        this.type = "taxi";
        if (this.distance <= 1.0) {
            this.rate = 0;
        }
        else if (this.distance > 1.0 && this.distance <= 10.0) {
            this.rate = 5.5;
        }
        else if (this.distance > 10.0 && this.distance <= 20.0) {
            this.rate = 6.5;
        }
        else if (this.distance > 20.0 && this.distance <= 40.0) {
            this.rate = 7.5;
        }
        else if (this.distance > 40.0 && this.distance <= 60.0) {
            this.rate = 8.0;
        }
        else if (this.distance > 60.0 && this.distance <= 80.0) {
            this.rate = 9.0;
        }
        else if (this.distance > 80.0) {
            this.rate = 10.5;
        }
        this.calPrice(35, this.rate, this.type);
    };
    CalService.prototype.calPrice = function (start, rate, type) {
        this.price1 = document.getElementById('price1');
        this.price2 = document.getElementById('price2');
        this.textTotalAmount = document.getElementById('totalAmount');
        if (this.price2 != "") {
            this.price2.innerHTML = "";
        }
        if (type == "motor" && this.distance <= 5.0) {
            this.amount = this.priceMotor;
        }
        else {
            this.amount = ((this.distance * rate) + start);
        }
        this.price2.innerHTML = 'Price : ' + this.amount + ' &#3647';
        this.payment.setAmount(this.amount);
    };
    CalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _payment_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]])
    ], CalService);
    return CalService;
}());



/***/ }),

/***/ "./src/app/confirm/confirm.component.html":
/*!************************************************!*\
  !*** ./src/app/confirm/confirm.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Comfirm popup-->\n<div class=\"modal fade\" id=\"confirm\" style=\"z-index: 999999999;\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"color: black\">Notice</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p><label style=\"color: black\">{{textConfirm}}</label></p>\n      </div>\n      <div class=\"modal-footer text-center\">\n        <button id=\"logOutBtn\" type=\"button\" title=\"logout\" class=\"btn btn-success\" data-dismiss=\"modal\"\n                (click)=\"logout();\">Log out\n        </button>\n        <button id=\"callBtn\" type=\"button\" title=\"continue\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"paymentText();waitbtnsh();\"\n        >Continue\n        </button>\n        <button id=\"waitBtn\" type=\"button\" title=\"continue\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"callbtnsh()\"\n        >Continue\n        </button>\n        <button id=\"payBtn\" type=\"button\" title=\"payment\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#omise\" data-dismiss=\"modal\"\n        >Payment\n        </button>\n        <button type=\"button\" title=\"go back\" class=\"btn btn-danger\" data-dismiss=\"modal\">Go Back</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!--/Confirm popup-->\n\n<app-payment></app-payment>\n"

/***/ }),

/***/ "./src/app/confirm/confirm.component.scss":
/*!************************************************!*\
  !*** ./src/app/confirm/confirm.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/payment.service */ "./src/app/payment/payment.service.ts");
/* harmony import */ var _select_type_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-type/select.service */ "./src/app/select-type/select.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(authService, data, payment, select) {
        this.authService = authService;
        this.data = data;
        this.payment = payment;
        this.select = select;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (e) { return _this.textConfirm = e; });
    };
    ConfirmComponent.prototype.paymentText = function () {
        this.data.panelStatus(true);
        this.payment.setTextOnItemPay();
    };
    ConfirmComponent.prototype.logout = function () {
        this.authService.logout();
        document.getElementById('logo').style.display = 'none';
        document.getElementById('loginGooglebtn').style.display = 'block';
        document.getElementById('name').style.display = 'none';
    };
    ConfirmComponent.prototype.callbtnsh = function () {
        this.payment.clearPay();
        this.select.callbtnsh();
    };
    ConfirmComponent.prototype.waitbtnsh = function () {
        this.select.waitbtnsh();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmComponent.prototype, "myEvent", void 0);
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/app/confirm/confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"], _select_type_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/confirm/confirm.service.ts":
/*!********************************************!*\
  !*** ./src/app/confirm/confirm.service.ts ***!
  \********************************************/
/*! exports provided: ConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmService = /** @class */ (function () {
    function ConfirmService() {
    }
    ConfirmService.prototype.logoutBtn = function () {
        document.getElementById('callBtn').style.display = "none";
        document.getElementById('payBtn').style.display = "none";
        document.getElementById('waitBtn').style.display = "none";
        document.getElementById('logOutBtn').style.display = "block";
    };
    ConfirmService.prototype.callBtn = function () {
        document.getElementById('logOutBtn').style.display = "none";
        document.getElementById('payBtn').style.display = "none";
        document.getElementById('waitBtn').style.display = "none";
        document.getElementById('callBtn').style.display = "block";
    };
    ConfirmService.prototype.payBtn = function () {
        document.getElementById('logOutBtn').style.display = "none";
        document.getElementById('callBtn').style.display = "none";
        document.getElementById('waitBtn').style.display = "none";
        document.getElementById('payBtn').style.display = "block";
    };
    ConfirmService.prototype.waitBtn = function () {
        document.getElementById('logOutBtn').style.display = "none";
        document.getElementById('callBtn').style.display = "none";
        document.getElementById('payBtn').style.display = "none";
        document.getElementById('waitBtn').style.display = "block";
    };
    ConfirmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmService);
    return ConfirmService;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.statusbtnCall = true;
        this.messageConfirm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.panel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.call = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.currentMessage = this.messageConfirm.asObservable();
        this.statusPanel = this.panel.asObservable();
        this.callService = this.call.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageConfirm.next(message);
    };
    DataService.prototype.panelStatus = function (panel) {
        this.panel.next(panel);
    };
    DataService.prototype.setCall = function (call) {
        this.call.next(call);
    };
    DataService.prototype.setDistance = function (distance) {
        this.distanceTotal = distance;
        console.log(distance);
    };
    DataService.prototype.getDistance = function () {
        console.log(this.distanceTotal);
        return this.distanceTotal;
    };
    DataService.prototype.setStatusbtnCall = function (status) {
        this.statusbtnCall = status;
        console.log(status);
    };
    DataService.prototype.getStatusbtnCall = function () {
        console.log(this.statusbtnCall);
        return this.statusbtnCall;
    };
    DataService.prototype.setPlaceName = function (name) {
        this.namePlace = name;
        console.log(name);
    };
    DataService.prototype.getPlaceName = function () {
        console.log(this.namePlace);
        return this.namePlace;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"history\" style=\"z-index:9999999;\">\n  <div class=\"modal-dialog\" style=\"text-align: center;\">\n    <div class=\"modal-content\" style=\"height:450px;padding: 2%;margin-top: 13%;\">\n      <div class=\"title\" style=\"margin-top: 2%;margin-bottom: 1%;z-index: 999;color: black;\">History\n      </div>\n      <div class=\"list-group\">\n        <div class=\"list-group\" style=\"z-index: 9999999;\">\n          <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"\n             style=\"overflow-x: auto;overflow-y:auto;\">\n            <table style=\"width:100%; color: #000;\">\n              <tr>\n                <th>Transaction No.</th>\n                <!--<th>Time</th>-->\n                <!--<th>Source</th>-->\n                <!--<th>Destination</th>-->\n                <!--<th>Distance</th>-->\n                <!--<th>Price</th>-->\n                <!--<th>Provider</th>-->\n              </tr>\n              <tr *ngFor=\"let item of transaction;\">\n                <td>{{item.id}}</td>\n                <!--<td>{{item.timeStart}}</td>-->\n                <!--<td>{{item.timeStart}}</td>-->\n                <!--<td>{{item.timeStart}}</td>-->\n                <!--<td>{{item.timeStart}}</td>-->\n                <!--<td>{{item.timeStart}}</td>-->\n                <!--<td>{{item.timeStart}}</td>-->\n              </tr>\n            </table>\n          </a>\n          <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n            <div style=\"color: #dd131b;text-align: center;\">ตอนนี้ทดลอง Query จากตาราง user ก่อน รอฝั่ง Back end\n              สร้างตาราง History\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(http) {
        this.http = http;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.getTransaction();
    };
    HistoryComponent.prototype.getTransaction = function () {
        var _this = this;
        this.http.get('/api/transaction').subscribe(function (data) {
            console.log(data);
            _this.transaction = data;
            console.log("transaction : " + _this.transaction);
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-navbar-item\">\n  <a *ngIf=\"\" (click)=\"loginFacebook()\" class=\"uk-icon-button  uk-margin-small-right\"\n     uk-icon=\"facebook\"></a>\n  <a id=\"loginGooglebtn\" (click)=\"loginGoogle()\" class=\"uk-icon-button uk-margin-small-right\"\n     uk-icon=\"google-plus\"></a>\n\n  <a id=\"logo\"><img class=\"uk-icon-button\" src=\"{{photo}}\"\n                    width=\"50px\" height=\"50px\"><span class=\"uk-badge\"\n                                                     style=\"position: relative; margin-bottom: 15px;margin-right: 5px\">1</span></a>\n  <div uk-dropdown=\"mode: click\">\n    <ul class=\"uk-nav uk-dropdown-nav\">\n      <li id=\"name\" class=\"uk-nav-header\" style=\"text-align: center\">{{username}} ({{useremail}})</li>\n      <li class=\"uk-nav-divider\"></li>\n      <li><a class=\"uk-dropdown-close\" data-toggle=\"modal\" data-target=\"#route\"><span class=\"uk-margin-small-right\"\n                                                                                      uk-icon=\"icon: location\"></span>Route\n        Detail\n        <span class=\"uk-margin-small-left uk-badge\">1</span></a></li>\n      <li><a class=\"uk-dropdown-close\" data-toggle=\"modal\" data-target=\"#history\"><span class=\"uk-margin-small-right\"\n                                                                                        uk-icon=\"icon: history\"></span>History</a>\n      </li>\n      <li><a class=\"uk-dropdown-close\" data-toggle=\"modal\" data-target=\"#omise\"><span class=\"uk-margin-small-right\"\n                                                                                      uk-icon=\"icon: credit-card\"></span>Payment</a>\n      </li>\n      <li class=\"uk-nav-divider\"></li>\n      <li><a class=\"uk-dropdown-close\" data-toggle=\"modal\" data-target=\"#confirm\" (click)=\"setNoticeLogout();\"><span\n        class=\"uk-margin-small-right\" uk-icon=\"sign-out\" style=\"color: red\"></span>Logout</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<app-select-type></app-select-type>\n\n<app-confirm></app-confirm>\n\n<app-history></app-history>\n\n<app-payment></app-payment>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _confirm_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm/confirm.service */ "./src/app/confirm/confirm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, data, confirm) {
        this.authService = authService;
        this.data = data;
        this.confirm = confirm;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDisplayName();
        this.data.currentMessage.subscribe(function (e) { return _this.textConfirm = e; });
    };
    LoginComponent.prototype.getDisplayName = function () {
        var _this = this;
        this.authService.afAuth.authState.subscribe(function (e) {
            if (e != null) {
                _this.username = e.displayName;
                _this.useremail = e.email;
                _this.photo = e.photoURL;
                document.getElementById('name').style.display = 'block';
                document.getElementById('loginGooglebtn').style.display = 'none';
                document.getElementById('logo').style.display = 'block';
            }
            else {
                document.getElementById('logo').style.display = 'none';
            }
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        var userResult = this.authService.loginWithGoogle();
        userResult.subscribe(function (e) {
            if (e != null) {
                _this.username = e.displayName;
                _this.useremail = e.email;
                _this.photo = e.photoURL;
                document.getElementById('name').style.display = 'block';
                document.getElementById('loginGooglebtn').style.display = 'none';
                document.getElementById('logo').style.display = 'block';
            }
        });
    };
    LoginComponent.prototype.loginFacebook = function () {
        this.authService.loginWithFacebook();
    };
    LoginComponent.prototype.printUser = function () {
        this.authService.afAuth.authState.subscribe(function (e) {
            console.log("authState : " + e.isAnonymous);
        });
    };
    LoginComponent.prototype.setNoticeLogout = function () {
        this.myEvent.emit(null);
        this.data.changeMessage("Are you sure you want to log out?");
        this.confirm.logoutBtn();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "myEvent", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _confirm_confirm_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #map style=\"width:100%; height:90vh; z-index: 0;\">\n  Loading...\n</div>\n\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _select_type_select_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-type/select.service */ "./src/app/select-type/select.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelMode = google.maps.TravelMode;
var DirectionsStatus = google.maps.DirectionsStatus;


var MapComponent = /** @class */ (function () {
    function MapComponent(http, data, select) {
        this.http = http;
        this.data = data;
        this.select = select;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nearByPlace = [];
        this.activeProviders = [];
        this.radius = 1000;
        this.count = 0;
        this.travelList = [];
        this.directionService = new google.maps.DirectionsService;
        this.directionDisplay = new google.maps.DirectionsRenderer;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                _this.setMyLocation(pos);
                var mapProp = {
                    center: pos,
                    zoom: 15,
                    disableDefaultUI: true
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapProp);
                var marker = new google.maps.Marker({
                    position: pos,
                    title: 'My Current Location',
                    animation: google.maps.Animation.BOUNCE,
                    icon: "../assets/img/location.png"
                });
                _this.setMyMarker(marker);
                _this.searchEvent();
            }));
        }
    };
    MapComponent.prototype.setMyLocation = function (pos) {
        this.myPos = pos;
    };
    MapComponent.prototype.setMyMarker = function (marker) {
        this.myMarker = marker;
        this.myMarker.setMap(this.map);
        this.nearByPlace.push(marker);
    };
    // Search
    MapComponent.prototype.searchEvent = function () {
        var _this = this;
        this.map.addListener('click', function (args) {
            _this.selectPlace = args.latLng;
            _this.findDirection();
            console.log("select place : " + _this.selectPlace);
            // this.placeName = google.maps.geometry.this.selectPlace;
            // this.data.setPlaceName(this.placeName);
        });
    };
    MapComponent.prototype.geoLocate = function () {
        this.setMyLocation(this.myPos);
        var marker = new google.maps.Marker({
            position: this.myPos,
            title: 'My Current Location',
            animation: google.maps.Animation.BOUNCE,
            icon: "../assets/img/location.png"
        });
        this.setMyMarker(marker);
    };
    MapComponent.prototype.requestServiceNearby = function (service, requestName) {
        var _this = this;
        service.nearbySearch(requestName, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this.createMarker(results[i]);
                }
            }
        });
    };
    MapComponent.prototype.searchHostel = function () {
        this.clearMarker();
        this.directionDisplay.setMap(null);
        this.geoLocate();
        var request = ({
            location: this.myPos,
            radius: this.radius,
            type: 'lodging'
        });
        var service = new google.maps.places.PlacesService(this.map);
        this.requestServiceNearby(service, request);
    };
    MapComponent.prototype.searchTourist = function () {
        this.clearMarker();
        this.directionDisplay.setMap(null);
        this.geoLocate();
        var requestShop = {
            location: this.myPos,
            radius: this.radius,
            type: 'shopping_mall'
        };
        var requestPark = {
            location: this.myPos,
            radius: this.radius,
            type: 'park'
        };
        var requestMovie = {
            location: this.myPos,
            radius: this.radius,
            type: 'movie_theater'
        };
        var requestNight = {
            location: this.myPos,
            radius: this.radius,
            type: 'night_club'
        };
        var requestAmuusement = {
            location: this.myPos,
            radius: this.radius,
            type: 'amusement_park'
        };
        var service = new google.maps.places.PlacesService(this.map);
        this.requestServiceNearby(service, requestShop);
        this.requestServiceNearby(service, requestPark);
        this.requestServiceNearby(service, requestMovie);
        this.requestServiceNearby(service, requestNight);
        this.requestServiceNearby(service, requestAmuusement);
    };
    MapComponent.prototype.searchRestaurant = function () {
        this.clearMarker();
        this.directionDisplay.setMap(null);
        this.geoLocate();
        var request = ({
            location: this.myPos,
            radius: this.radius,
            type: 'restaurant'
        });
        var service = new google.maps.places.PlacesService(this.map);
        this.requestServiceNearby(service, request);
    };
    MapComponent.prototype.createMarker = function (place) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', function () {
            _this.selectPlace = marker.getPosition();
            _this.data.setPlaceName(place.name);
            _this.findDirection();
            _this.count++;
        });
        this.nearByPlace.push(marker);
    };
    MapComponent.prototype.findDirection = function () {
        var _this = this;
        this.clearMarker();
        var request = {
            origin: this.myPos,
            destination: this.selectPlace,
            travelMode: TravelMode.DRIVING
        };
        this.directionDisplay.setMap(null);
        this.directionService.route(request, function (result, status) {
            if (status === DirectionsStatus.OK) {
                _this.directionDisplay.setMap(_this.map);
                _this.directionDisplay.setDirections(result);
                _this.distance = parseFloat(_this.directionDisplay.getDirections().routes[0].legs[0].distance.text);
                var panel = document.getElementById('route-panel');
                _this.directionDisplay.setPanel(panel);
                console.log("distance : " + _this.distance + " km");
                _this.setDistance(_this.distance);
                _this.placeName = result.routes[0].legs[0].end_address;
                _this.data.setCall(true);
                _this.data.panelStatus(false);
                _this.select.closeWarning();
                _this.select.callbtnsh();
                if (_this.count == 0) {
                    _this.data.setPlaceName(_this.placeName);
                }
                else {
                    _this.count = 0;
                }
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    MapComponent.prototype.clearMarker = function () {
        this.setMapOnAll(null);
        this.nearByPlace = [];
    };
    MapComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.nearByPlace.length; i++) {
            this.nearByPlace[i].setMap(map);
        }
    };
    MapComponent.prototype.searchActiveProvider = function () {
    };
    MapComponent.prototype.setDistance = function (distance) {
        this.data.setDistance(distance);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "mapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "myEvent", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _select_type_select_service__WEBPACK_IMPORTED_MODULE_3__["SelectService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"omise\" style=\"z-index:9999999;\">\n  <div class=\"modal-dialog\" style=\"text-align: center;\">\n    <div class=\"modal-content\" style=\"height:450px;padding: 2%;margin-top: 13%;\">\n      <div class=\"title\" style=\"margin-top: 2%;z-index: 999;color: black;\">Payment\n      </div>\n      <div class=\"list-group\">\n        <div id=\"itemPay\">\n          <div class=\"list-group\" style=\"z-index: 9999999;max-height: 100%\">\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <h6 class=\"mb-1\" style=\"text-align: left\">\n                <label id=\"totalTravel\" style=\"color: black\"></label>\n                <span style=\"float: right;\">\n            <label title=\"price\" id=\"price1\" style=\"color: black\"></label>\n            </span>\n              </h6>\n            </a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <div title=\"Source\" class=\"form-control\" style=\"margin-right: 3%;width: 100%\">\n                <marquee direction=\"left\" onmouseout=\"this.start()\" onmouseover=\"this.stop()\"\n                         scrollamount=\"2\" scrolldelay=\"4\">\n                  Your Location\n                </marquee>\n              </div>\n            </a>\n            <span type=\"text\" style=\"text-align: center;color: black\"> to </span>\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <div title=\"Destination\" class=\"form-control\">\n                <marquee direction=\"left\" onmouseout=\"this.start()\" onmouseover=\"this.stop()\"\n                         scrollamount=\"2\" scrolldelay=\"4\">\n                  <label id=\"destination\"></label>\n                </marquee>\n              </div>\n            </a>\n            <span type=\"text\" title=\"total price\"><label id=\"totalAmount\" style=\"color: orangered;\"></label></span>\n            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n              <div class=\"form\">\n                <div>\n                  <!-- Create your own button -->\n                  <button title=\"Pay now\" class=\"btn btn-success\" type=\"submit\" id=\"pay-button\" (click)=\"omisePayment()\">Pay now</button>\n                </div>\n\n                <form id=\"from-pay\" name=\"checkoutForm\">\n                  <input type=\"hidden\" name=\"sample-number\" value=\"sample-5\">\n                </form>\n              </div>\n              <button class=\"btn btn-danger\" (click)=\"payItem1();\">Test(จ่ายสำเร็จ)</button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/payment/payment.component.scss":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _select_type_select_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-type/select.service */ "./src/app/select-type/select.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(data, select) {
        this.data = data;
        this.select = select;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.price1 = document.getElementById('price1');
        this.textTotalAmount = document.getElementById('totalAmount');
        document.getElementById('itemPay').style.display = 'none';
    };
    PaymentComponent.prototype.clearTextOnItemPay = function () {
        this.price1.innerHTML = "";
        this.textTotalAmount.innerHTML = "";
        document.getElementById('totalTravel').innerHTML = "";
        document.getElementById('destination').innerHTML = "";
    };
    PaymentComponent.prototype.payItem1 = function () {
        this.data.panelStatus(false);
        this.select.callbtnsh();
        this.data.setCall(true);
        document.getElementById('itemPay').style.display = 'none';
        this.clearTextOnItemPay();
    };
    PaymentComponent.prototype.render = function () {
        var key;
        key.secretKey = "";
        key.publicKey = "";
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _select_type_select_service__WEBPACK_IMPORTED_MODULE_2__["SelectService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.service.ts":
/*!********************************************!*\
  !*** ./src/app/payment/payment.service.ts ***!
  \********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _select_type_select_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-type/select.service */ "./src/app/select-type/select.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = /** @class */ (function () {
    function PaymentService(data, select) {
        this.data = data;
        this.select = select;
    }
    PaymentService.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    PaymentService.prototype.setTextOnItemPay = function () {
        document.getElementById("itemPay").style.display = 'block';
        this.price1 = document.getElementById('price1');
        this.textTotalAmount = document.getElementById('totalAmount');
        console.log(this.data.getDistance());
        this.distance = this.data.getDistance();
        var temp = ((0.0365) * this.amount) * 0.07;
        console.log(temp);
        console.log((0.0365) * this.amount + " => " + temp);
        this.totalAmount = ((((0.0365) * this.amount) + temp) + this.amount).toFixed(2);
        this.price1.innerHTML = 'Price : ' + this.amount + ' &#3647';
        this.textTotalAmount.innerHTML = 'Price(' + this.amount + ' &#3647) + Charge(3.65%+7%(7% of 3.65%))' + ' = ' + this.totalAmount + ' &#3647';
        document.getElementById('totalTravel').innerHTML = 'item #1 (  ' + this.distance + ' km)';
        document.getElementById('destination').innerHTML = this.data.getPlaceName();
    };
    PaymentService.prototype.clearPay = function () {
        this.data.panelStatus(false);
        this.select.callbtnsh();
        this.data.setCall(true);
        document.getElementById('itemPay').style.display = 'none';
        this.price1.innerHTML = "";
        this.textTotalAmount.innerHTML = "";
        document.getElementById('totalTravel').innerHTML = "";
        document.getElementById('destination').innerHTML = "";
    };
    PaymentService.prototype.statusPayItem = function () {
        if (document.getElementById('itemPay').style.display == 'none') {
            return true;
        }
        else {
            return false;
        }
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _select_type_select_service__WEBPACK_IMPORTED_MODULE_2__["SelectService"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/providers/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthService.prototype.loginWithGoogle = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        this.afAuth.auth.signInWithPopup(provider);
        return this.user;
    };
    AuthService.prototype.loginWithFacebook = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
        this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/select-type/select-type.component.html":
/*!********************************************************!*\
  !*** ./src/app/select-type/select-type.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"route\" style=\"z-index:9999999;\">\n  <div class=\"modal-dialog modal-lg\" style=\"text-align: center;\">\n    <div class=\"modal-content\" style=\"height:450px;padding: 2%;margin-top: 13%;\">\n      <div class=\"title\" style=\"margin-top: 2%;z-index: 999;color: black\">Route and call service\n      </div>\n      <div class=\"list-group\" style=\"z-index: 9999999;max-height: 100%\">\n        <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <button title=\"Select vehicle\" id=\"select\" [disabled]=\"btnSelect\" class=\"btn btn-secondary dropdown-toggle\"\n                  type=\"button\"\n                  style=\"float: left;\"\n                  id=\"dropdownMenu2\" data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" aria-expanded=\"false\">\n            Select vehicle\n          </button>\n          <span id=\"warningSelect\" style=\"float: right;margin-top: 3%;color: red\">\n            ***Please select destination***\n                        </span>\n          <span title=\"price\" style=\"float: right;margin-top: 3%\">\n            <label id=\"price2\"></label>\n                        </span>\n          <div id=\"type\" class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n            <button title=\"Motorcycle\" class=\"dropdown-item\" type=\"button\" value=\"1\" (click)=\"setMotor()\">\n              Motorcycle\n            </button>\n            <button title=\"Taxi\" class=\"dropdown-item\" type=\"button\" value=\"2\" (click)=\"setTaxi()\">\n              Taxi\n            </button>\n          </div>\n        </a>\n        <div id=\"route-panel\"\n             style=\"position: relative;max-height: 20%!important; overflow: auto;text-align: center;\">\n        </div>\n        <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n          <button id=\"callbtn\" title=\"callService\" [disabled]=\"btnCallService\" class=\"btn btn-success\" type=\"button\"\n                  data-toggle=\"modal\" data-target=\"#confirm\" (click)=\"setNotice();\">\n            Call Service\n          </button>\n          <button id=\"waitingbtn\" title=\"waiting\" class=\"btn btn-warning\" type=\"button\"\n                  data-toggle=\"modal\" data-target=\"#confirm\" (click)=\"setNoticeWait();\">\n            waiting\n          </button>\n          <button id=\"incomebtn\" title=\"service incoming\" class=\"btn btn-danger\" type=\"button\" disabled>\n            Service incoming\n          </button>\n          <button id=\"servicebtn\" title=\"test accept\" class=\"btn btn-danger\" type=\"button\"\n                  (click)=\"closeSelect();incomebtnsh();\">\n            Test(service accept)\n          </button>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-confirm></app-confirm>\n"

/***/ }),

/***/ "./src/app/select-type/select-type.component.scss":
/*!********************************************************!*\
  !*** ./src/app/select-type/select-type.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/select-type/select-type.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-type/select-type.component.ts ***!
  \******************************************************/
/*! exports provided: SelectTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTypeComponent", function() { return SelectTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cal_price_cal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cal-price/cal.service */ "./src/app/cal-price/cal.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/payment.service */ "./src/app/payment/payment.service.ts");
/* harmony import */ var _confirm_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm/confirm.service */ "./src/app/confirm/confirm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectTypeComponent = /** @class */ (function () {
    function SelectTypeComponent(cal, data, payment, confirm) {
        this.cal = cal;
        this.data = data;
        this.payment = payment;
        this.confirm = confirm;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SelectTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.btnSelect = true;
        this.data.statusPanel.subscribe(function (e) { return _this.btnSelect = e; });
        this.data.callService.subscribe(function (e) { return _this.btnCallService = e; });
        document.getElementById("waitingbtn").style.display = 'none';
        document.getElementById("incomebtn").style.display = 'none';
        document.getElementById("servicebtn").style.display = 'none';
        document.getElementById("warningSelect").style.display = 'block';
    };
    SelectTypeComponent.prototype.setMotor = function () {
        this.cal.setTypeMotor();
        this.btnCallService = false;
        this.data.setStatusbtnCall(false);
    };
    SelectTypeComponent.prototype.setTaxi = function () {
        this.cal.setTypeTaxi();
        this.btnCallService = false;
        this.data.setStatusbtnCall(false);
    };
    SelectTypeComponent.prototype.setNotice = function () {
        var check = this.payment.statusPayItem();
        if (check) {
            this.setNoticeCall();
        }
        else {
            this.setNoticePay();
        }
    };
    SelectTypeComponent.prototype.setNoticeCall = function () {
        this.myEvent.emit(null);
        this.data.changeMessage("Are you sure you want to call service ?");
        this.confirm.callBtn();
    };
    SelectTypeComponent.prototype.setNoticePay = function () {
        this.myEvent.emit(null);
        this.data.changeMessage("You have an outstanding balance. Please pay");
        this.confirm.payBtn();
    };
    SelectTypeComponent.prototype.setNoticeWait = function () {
        this.myEvent.emit(null);
        this.data.changeMessage("Are you sure you want to cancel service ?");
        this.confirm.waitBtn();
    };
    SelectTypeComponent.prototype.closeSelect = function () {
        this.data.panelStatus(true);
    };
    SelectTypeComponent.prototype.incomebtnsh = function () {
        document.getElementById("servicebtn").style.display = 'none';
        document.getElementById("waitingbtn").style.display = 'none';
        document.getElementById("callbtn").style.display = 'none';
        document.getElementById("incomebtn").style.display = 'block';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SelectTypeComponent.prototype, "myEvent", void 0);
    SelectTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-type',
            template: __webpack_require__(/*! ./select-type.component.html */ "./src/app/select-type/select-type.component.html"),
            styles: [__webpack_require__(/*! ./select-type.component.scss */ "./src/app/select-type/select-type.component.scss")]
        }),
        __metadata("design:paramtypes", [_cal_price_cal_service__WEBPACK_IMPORTED_MODULE_1__["CalService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _payment_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"], _confirm_confirm_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"]])
    ], SelectTypeComponent);
    return SelectTypeComponent;
}());



/***/ }),

/***/ "./src/app/select-type/select.service.ts":
/*!***********************************************!*\
  !*** ./src/app/select-type/select.service.ts ***!
  \***********************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectService = /** @class */ (function () {
    function SelectService() {
    }
    SelectService.prototype.callbtnsh = function () {
        document.getElementById("incomebtn").style.display = 'none';
        document.getElementById("servicebtn").style.display = 'none';
        document.getElementById("waitingbtn").style.display = 'none';
        document.getElementById("callbtn").style.display = 'block';
    };
    SelectService.prototype.waitbtnsh = function () {
        document.getElementById("servicebtn").style.display = 'block';
        document.getElementById("callbtn").style.display = 'none';
        document.getElementById("waitingbtn").style.display = 'block';
    };
    SelectService.prototype.closeWarning = function () {
        document.getElementById("warningSelect").style.display = 'none';
    };
    SelectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SelectService);
    return SelectService;
}());



/***/ }),

/***/ "./src/app/starter/starter-nav/starter-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/starter/starter-nav/starter-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hos:visited {\n  border-bottom: 5px solid red;\n}\n\n.tour:visited {\n  border-bottom: 5px solid dodgerblue;\n}\n\n.rest:visited {\n  border-bottom: 5px solid green;\n}\n\nnav {\n  background-color: #323e53 !important;\n  color: #ffffff;\n}\n\n.white {\n  color: #ffffff;\n}\n\n"

/***/ }),

/***/ "./src/app/starter/starter-nav/starter-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/starter/starter-nav/starter-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<nav class=\"uk-navbar-container\" uk-navbar xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"nav-overlay uk-navbar-left\">\n\n    <!-- Paigunna Logo -->\n    <a class=\"uk-navbar-item uk-logo\" href=\"/\"><img src=\"assets/img/paigunna-logo.png\" width=\"100px\" height=\"100px\"></a>\n\n    <!-- Menu List -->\n    <ul class=\"uk-navbar-nav\">\n      <li class=\" hos\"><a (click)=\"mapComponent.searchHostel()\">Hostel</a></li>\n      <li class=\" tour\"><a (click)=\"mapComponent.searchTourist()\">Tourist Attraction</a></li>\n      <li class=\" rest\"><a (click)=\"mapComponent.searchRestaurant()\">Restaurant</a></li>\n    </ul>\n\n  </div>\n\n  <!-- Search Box-->\n  <div class=\"nav-overlay uk-navbar-right\">\n\n    <app-login></app-login>\n\n    <a class=\"uk-navbar-toggle\" uk-search-icon uk-toggle=\"target: .nav-overlay; animation: uk-animation-fade\"\n       href=\"#\"></a>\n  </div>\n\n  <div class=\"nav-overlay uk-navbar-left uk-flex-1\" hidden>\n\n    <div class=\"uk-navbar-item uk-width-expand\">\n      <form class=\"uk-search uk-search-navbar uk-width-1-1\">\n        <input [(ngModel)]=\"placeSearch\" [ngModelOptions]=\"{standalone: true}\" (change)=\"textChange()\"\n               class=\"uk-search-input\" type=\"search\" placeholder=\"Search Place\" autofocus>\n      </form>\n    </div>\n    <a class=\"uk-navbar-toggle\" uk-close uk-toggle=\"target: .nav-overlay; animation: uk-animation-fade\" href=\"#\"></a>\n  </div>\n</nav>\n\n<app-map></app-map>\n\n\n"

/***/ }),

/***/ "./src/app/starter/starter-nav/starter-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/starter/starter-nav/starter-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: StarterNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterNavComponent", function() { return StarterNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/auth.service */ "./src/app/providers/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StarterNavComponent = /** @class */ (function () {
    function StarterNavComponent(authService) {
        this.authService = authService;
    }
    StarterNavComponent.prototype.ngOnInit = function () {
    };
    StarterNavComponent.prototype.ngAfterViewInit = function () {
        console.log('only after THIS EVENT "child" is usable!!');
    };
    StarterNavComponent.prototype.textChange = function () {
        console.log(this.placeSearch);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]),
        __metadata("design:type", Object)
    ], StarterNavComponent.prototype, "mapComponent", void 0);
    StarterNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starter-nav',
            template: __webpack_require__(/*! ./starter-nav.component.html */ "./src/app/starter/starter-nav/starter-nav.component.html"),
            styles: [__webpack_require__(/*! ./starter-nav.component.css */ "./src/app/starter/starter-nav/starter-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], StarterNavComponent);
    return StarterNavComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter.component.css":
/*!***********************************************!*\
  !*** ./src/app/starter/starter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/starter/starter.component.html":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-starter-nav></app-starter-nav>\n</div>\n"

/***/ }),

/***/ "./src/app/starter/starter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterComponent = /** @class */ (function () {
    function StarterComponent() {
    }
    StarterComponent.prototype.ngOnInit = function () {
    };
    StarterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starter',
            template: __webpack_require__(/*! ./starter.component.html */ "./src/app/starter/starter.component.html"),
            styles: [__webpack_require__(/*! ./starter.component.css */ "./src/app/starter/starter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAGwr9WxsGbt0jQdllJbQANHcQ7FMj7FpU",
        authDomain: "projectpgn.firebaseapp.com",
        databaseURL: "https://projectpgn.firebaseio.com",
        projectId: "projectpgn",
        storageBucket: "projectpgn.appspot.com",
        messagingSenderId: "471681704144"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/faris/paigunna-prod/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map