import {Component, ElementRef, OnInit, Provider, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {} from "@types/googlemaps";
import TravelMode = google.maps.TravelMode;
import DirectionsStatus = google.maps.DirectionsStatus;

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

  constructor(private http: HttpClient) {

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
        let panel = document.getElementById('route-panel');
        this.directionDisplay.setPanel(panel);
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

  searchActiveProvider() {
  }

}
