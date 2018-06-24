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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _starter_starter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./starter/starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var _starter_starter_nav_starter_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./starter/starter-nav/starter-nav.component */ "./src/app/starter/starter-nav/starter-nav.component.ts");
/* harmony import */ var _starter_starter_side_nav_starter_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./starter/starter-side-nav/starter-side-nav.component */ "./src/app/starter/starter-side-nav/starter-side-nav.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _starter_starter_component__WEBPACK_IMPORTED_MODULE_7__["StarterComponent"],
                _starter_starter_nav_starter_nav_component__WEBPACK_IMPORTED_MODULE_8__["StarterNavComponent"],
                _starter_starter_side_nav_starter_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["StarterSideNavComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        pathMatch: 'full'
                    },
                    // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                    {
                        path: '',
                        component: _starter_starter_component__WEBPACK_IMPORTED_MODULE_7__["StarterComponent"],
                        data: { title: 'หน้าหลัก', iconClass: 'fa fa-home' },
                        children: [
                            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], pathMatch: 'full' },
                            { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], pathMatch: 'full' }
                        ]
                    }
                ]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary waves-light\" (click)=\"form.show()\" mdbWavesEffect>Login with avatar form</button>\n<!--Modal: Login with Avatar Form-->\n<div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalLoginAvatar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n\n      <!--Header-->\n      <div class=\"modal-header\">\n        <img src=\"../../../assets/img/paigunna-logo.png\" class=\"rounded-circle img-responsive\">\n      </div>\n      <!--Body-->\n      <div class=\"modal-body text-center mb-1\">\n\n        <h5 class=\"mt-1 mb-2\">Paigunna</h5>\n\n        <div class=\"md-form ml-0 mr-0\">\n          <input mdbInputDirective type=\"password\" type=\"text\" id=\"form29\" class=\"form-control ml-0\">\n          <label for=\"form29\" class=\"ml-0\">Enter password</label>\n        </div>\n\n        <div class=\"text-center\">\n          <button class=\"btn btn-cyan mt-1 waves-light\" mdbWavesEffect>Login <i class=\"fa fa-sign-in ml-1\"></i></button>\n        </div>\n      </div>\n\n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n<!--Modal: Login with Avatar Form-->\n"

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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "agm-map {\n  height: 100vh;\n  width: 100%;\n}\n"

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
    function MapComponent(http) {
        this.http = http;
        this.nearByPlace = [];
        this.activeProviders = [];
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
                    animation: google.maps.Animation.BOUNCE
                });
                marker.addListener('click', function (args) {
                    _this.map.panTo(marker.getPosition());
                    console.log(marker.getPosition().lng() + " : " + marker.getPosition().lat());
                });
                _this.setMyMarker(marker);
                _this.searchEvent();
            }));
        }
    };
    MapComponent.prototype.searchEvent = function () {
        var _this = this;
        this.map.addListener('click', function (args) {
            _this.selectPlace = args.latLng;
            _this.findDirection();
            console.log("select place : " + _this.selectPlace);
        });
    };
    MapComponent.prototype.setMyLocation = function (pos) {
        this.myPos = pos;
    };
    MapComponent.prototype.setMyMarker = function (marker) {
        this.myMarker = marker;
        this.myMarker.setMap(this.map);
    };
    MapComponent.prototype.searchHostel = function () {
        var _this = this;
        var request = ({
            location: this.myPos,
            radius: 500,
            type: 'lodging'
        });
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this.createMarker(results[i]);
                }
            }
        });
    };
    MapComponent.prototype.searchTourist = function () {
        var _this = this;
        var request = ({
            location: this.myPos,
            radius: 500,
            type: ''
        });
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this.createMarker(results[i]);
                }
            }
        });
    };
    MapComponent.prototype.searchRestaurant = function () {
        var _this = this;
        console.log("in resturant");
        var request = ({
            location: this.myPos,
            radius: 500,
            type: 'store'
        });
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    _this.createMarker(results[i]);
                }
            }
        });
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
            console.log("select place ; " + _this.selectPlace);
            _this.findDirection();
        });
    };
    MapComponent.prototype.findDirection = function () {
        var _this = this;
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
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    MapComponent.prototype.searchActiveProvider = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "mapElement", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter-nav/starter-nav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/starter/starter-nav/starter-nav.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hos:hover{\n border-bottom: 2px solid red;\n}\n\n.tour:hover{\n border-bottom: 2px solid dodgerblue;\n}\n\n.rest:hover{\n border-bottom: 2px solid green;\n}\n\nnav{\n  background-color: #ebebeb !important;\n}\n"

/***/ }),

/***/ "./src/app/starter/starter-nav/starter-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/starter/starter-nav/starter-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<nav class=\"uk-navbar-container\" uk-navbar xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"nav-overlay uk-navbar-left\">\n\n    <!-- Paigunna Logo -->\n    <a class=\"uk-navbar-item uk-logo\"><img src=\"assets/img/paigunna-logo.png\" width=\"100px\" height=\"100px\"></a>\n\n    <!-- Menu List -->\n    <ul class=\"uk-navbar-nav\">\n      <li class=\"uk-active hos\"><a (click)=\"mapComponent.searchHostel()\">Hostel</a></li>\n      <li class=\"uk-active tour\"><a (click)=\"mapComponent.searchTourist()\">Tourist Attraction</a></li>\n      <li class=\"uk-active rest\"><a (click)=\"mapComponent.searchRestaurant()\">Restaurant</a></li>\n    </ul>\n\n  </div>\n\n  <!-- Search Box-->\n  <div class=\"nav-overlay uk-navbar-right\">\n\n    <a href=\"\" class=\"uk-icon-button  uk-margin-small-right\" uk-icon=\"facebook\"></a>\n    <a href=\"\" class=\"uk-icon-button uk-margin-small-right\" uk-icon=\"google-plus\"></a>\n    <div class=\"uk-navbar-item\">\n      <a href=\"\"><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: user\"></span>Account</a>\n      <div uk-dropdown=\"mode: click\">\n        <ul class=\"uk-nav uk-dropdown-nav\">\n          <li class=\"uk-nav-header\">Account</li>\n          <li><a href=\"#\">Route Detail</a></li>\n          <li><a href=\"#\">History</a></li>\n          <li><a href=\"#\">Payment</a></li>\n          <li class=\"uk-nav-divider\"></li>\n          <li><a href=\"#\"><span uk-icon=\"sign-out\"></span>Logout</a></li>\n        </ul>\n      </div>\n    </div>\n\n\n    <a class=\"uk-navbar-toggle\" uk-search-icon uk-toggle=\"target: .nav-overlay; animation: uk-animation-fade\"\n       href=\"#\"></a>\n  </div>\n\n  <div class=\"nav-overlay uk-navbar-left uk-flex-1\" hidden>\n\n    <div class=\"uk-navbar-item uk-width-expand\">\n      <form class=\"uk-search uk-search-navbar uk-width-1-1\">\n        <input [(ngModel)]=\"placeSearch\" [ngModelOptions]=\"{standalone: true}\" (change)=\"textChange()\" class=\"uk-search-input\" type=\"search\" placeholder=\"Search Place\" autofocus>\n      </form>\n    </div>\n    <a class=\"uk-navbar-toggle\" uk-close uk-toggle=\"target: .nav-overlay; animation: uk-animation-fade\" href=\"#\"></a>\n  </div>\n</nav>\n\n<app-map></app-map>\n\n\n"

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
    function StarterNavComponent() {
    }
    StarterNavComponent.prototype.ngOnInit = function () {
    };
    StarterNavComponent.prototype.ngAfterViewInit = function () {
        console.log('only after THIS EVENT "child" is usable!!');
        this.mapComponent.searchRestaurant();
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
        __metadata("design:paramtypes", [])
    ], StarterNavComponent);
    return StarterNavComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter-side-nav/starter-side-nav.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/starter/starter-side-nav/starter-side-nav.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/starter/starter-side-nav/starter-side-nav.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/starter/starter-side-nav/starter-side-nav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/starter/starter-side-nav/starter-side-nav.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/starter/starter-side-nav/starter-side-nav.component.ts ***!
  \************************************************************************/
/*! exports provided: StarterSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterSideNavComponent", function() { return StarterSideNavComponent; });
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

var StarterSideNavComponent = /** @class */ (function () {
    function StarterSideNavComponent() {
    }
    StarterSideNavComponent.prototype.ngOnInit = function () {
    };
    StarterSideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-starter-side-nav',
            template: __webpack_require__(/*! ./starter-side-nav.component.html */ "./src/app/starter/starter-side-nav/starter-side-nav.component.html"),
            styles: [__webpack_require__(/*! ./starter-side-nav.component.css */ "./src/app/starter/starter-side-nav/starter-side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterSideNavComponent);
    return StarterSideNavComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/loki/Projects/paigunnaapi/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map