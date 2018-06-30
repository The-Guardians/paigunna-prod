import {Component, ElementRef, OnInit, Provider, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {} from "@types/googlemaps";
import TravelMode = google.maps.TravelMode;
import DirectionsStatus = google.maps.DirectionsStatus;
import {AuthService} from "../providers/auth.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  map: google.maps.Map;
  myMarker: google.maps.Marker;
  myPos: google.maps.LatLng;
  nearByPlace: any = [];
  activeProviders: Provider = [];
  selectPlace: any;

  travelList:any = [];

  directionService = new google.maps.DirectionsService;
  directionDisplay = new google.maps.DirectionsRenderer;
  distance: number;
  type: any;
  priceMotor: number;
  rate: number;
  price1: any;
  price2: any;
  textTotalAmount: any;
  totalAmount: any;
  amount: number;
  pay: number;

  constructor(private http: HttpClient , public authService: AuthService) {

  }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position => {

        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.setMyLocation(pos);

        let mapProp = {
          center: pos,
          zoom: 15,
          disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);

        let marker = new google.maps.Marker({
          position: pos,
          title: 'My Current Location',
          animation: google.maps.Animation.BOUNCE
        });

        marker.addListener('click', args => {
          this.map.panTo(marker.getPosition());
          console.log(marker.getPosition().lng() + " : " + marker.getPosition().lat());
        });

        this.setMyMarker(marker);
        this.searchEvent();

      }));
    }
  }

  setMyLocation(pos: any) {
    this.myPos = pos;
  }

  setMyMarker(marker: any) {
    this.myMarker = marker;
    this.myMarker.setMap(this.map);
  }


  // Search

  searchEvent() {
    this.map.addListener('click', args => {
      this.selectPlace= args.latLng;
      this.findDirection();

      console.log("select place : " + this.selectPlace);
    })

  }

  searchHostel() {

    this.clearMarker();

    let request = ({
      location: this.myPos,
      radius: 500,
      type: 'lodging'
    });

    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i])
        }
      }
    });

  }

  searchTourist() {

    this.clearMarker();

    let request = ({
      location: this.myPos,
      radius: 500,
      type: ''
    });

    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i])
        }
      }
    });
  }

  searchRestaurant() {

    this.clearMarker();

    console.log("in resturant");
    let request = ({
      location: this.myPos,
      radius: 500,
      type: 'store'
    });

    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i])
        }
      }
    });
  }

  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location,
      animation: google.maps.Animation.DROP
    });

    marker.addListener('click', () => {
      this.selectPlace = marker.getPosition();
      console.log("select place ; "+ this.selectPlace);
      this.findDirection();
    });

    this.nearByPlace.push(marker);
  }

  findDirection(){

    let request = {
      origin: this.myPos,
      destination: this.selectPlace,
      travelMode: TravelMode.DRIVING
    };
    this.directionDisplay.setMap(null);
    this.directionService.route(request, (result, status)=>{
      if (status === DirectionsStatus.OK) {
        this.directionDisplay.setMap(this.map);
        this.directionDisplay.setDirections(result);
        // let panel = document.getElementById('route-panel');
        // this.directionDisplay.setPanel(panel);
        console.log("direction : "+this.directionDisplay.getDirections().routes[0].legs[0].distance.value);
        this.distance = (this.directionDisplay.getDirections().routes[0].legs[0].distance.value)/1000;
        console.log("distance : "+this.distance+" km");
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

  clearMarker() {
    this.setMapOnAll(null);
    this.nearByPlace = [];
  }

  setMapOnAll(map){
    for(let i = 0 ; i < this.nearByPlace.length;i++){
      this.nearByPlace[i].setMap(map);
    }
  }

//   setTypeMotor() {
//     this.type = "motor";
//     if (this.distance <= 1.0) {
//       this.priceMotor = 10;
//     } else if (this.distance <= 1.3) {
//       this.priceMotor = 15;
//     } else if (this.distance <= 1.6) {
//       this.priceMotor = 20;
//     } else if (this.distance <= 2.0) {
//       this.priceMotor = 25;
//     } else if (this.distance <= 3.0) {
//       this.priceMotor = 30;
//     } else if (this.distance <= 4.0) {
//       this.priceMotor = 35;
//     } else if (this.distance <= 5.0) {
//       this.priceMotor = 40;
//     } else if (this.distance > 5.0) {
//       this.rate = 10;
//     }
//     console.log(1);
//     this.calPrice(0, this.rate, this.type);
//   }
//
//   setTypeTaxi() {
//     this.type = "taxi";
//     if (this.distance <= 1.0) {
//       this.rate = 0;
//     } else if (this.distance > 1.0 && this.distance <= 10.0) {
//       this.rate = 5.5;
//     } else if (this.distance > 10.0 && this.distance <= 20.0) {
//       this.rate = 6.5;
//     } else if (this.distance > 20.0 && this.distance <= 40.0) {
//       this.rate = 7.5;
//     } else if (this.distance > 40.0 && this.distance <= 60.0) {
//       this.rate = 8.0;
//     } else if (this.distance > 60.0 && this.distance <= 80.0) {
//       this.rate = 9.0;
//     } else if (this.distance > 80.0) {
//       this.rate = 10.5;
//     }
//     this.calPrice(35, this.rate, this.type);
//   }
//
//   calPrice(start, rate, type) {
//
//     this.price1 = document.getElementById('price1');
//     this.price2 = document.getElementById('price2');
//     this.textTotalAmount = document.getElementById('totalAmount');
//     if (this.price2 != "") {
//       this.price2.innerHTML = "";
//     }
//     if (type == "motor" && this.priceMotor <= 5.0) {
//       this.amount = this.priceMotor;
//     } else {
//       this.amount = ((this.priceMotor * rate) + start);
//     }
//     var temp = ((0.0365) * this.amount) * 0.07;
//     console.log((0.0365) * this.amount + " => " + temp);
//     this.totalAmount = ((((0.0365) * this.amount) + temp) + this.amount).toFixed(2);
//     this.price2.innerHTML = 'Price : ' + this.amount + ' &#3647';
//
//   }
//
//   setTextOnItemPay() {
//     if (document.getElementById('itemPay').style.display != 'block') {
//       this.price1.innerHTML = 'Price : ' + this.amount + ' &#3647';
//       this.textTotalAmount.innerHTML = 'Price(' + this.amount + ' &#3647) + Charge(3.65%+7%(7% of 3.65%))' + ' = ' + this.totalAmount + ' &#3647';
//       document.getElementById('totalTravel').innerHTML = 'item #1 (  ' + this.distance + ' km)';
//       // document.getElementById('destination').innerHTML = desName;
// //       var pay = totalAmount * 100;
// //       OmiseCard.configure({
// //         publicKey: 'pkey_test_5afuh3yxu16m5ih76xb',
// //         image: 'https://www.picz.in.th/images/2018/05/28/znlQ1k.png',
// //         amount: pay,
// //         submitFormTarget: '#from-pay'
// //       });
// // // Configuring your own custom button
// //       OmiseCard.configureButton('#pay-button', {
// //         frameLabel: 'Paigunna',
// //         submitLabel: 'PAY RIGHT NOW !'
// //       });
// //       OmiseCard.attach();
//     }
//   }
//
//
//
//   clearTextOnItemPay() {
//     this.price1.innerHTML = "";
//     this.textTotalAmount.innerHTML = "";
//     document.getElementById('totalTravel').innerHTML = "";
//     document.getElementById('destination').innerHTML = "";
//   }
//
//   payItem() {
//     document.getElementById('itemPay').style.display = 'none';
//     this.clearTextOnItemPay();
//   }
//
//   searchActiveProvider() {
//   }

}
