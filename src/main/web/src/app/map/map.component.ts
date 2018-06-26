import {Component, ElementRef, EventEmitter, OnInit, Output, Provider, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {} from "@types/googlemaps";
import TravelMode = google.maps.TravelMode;
import DirectionsStatus = google.maps.DirectionsStatus;
import {DataService} from "../data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  @Output() myEvent = new EventEmitter();

  map: google.maps.Map;
  myMarker: google.maps.Marker;
  myPos: google.maps.LatLng;
  nearByPlace: any = [];
  activeProviders: Provider = [];
  selectPlace: any;
  radius: number = 1000;
  placeName: string;

  directionService = new google.maps.DirectionsService;
  directionDisplay = new google.maps.DirectionsRenderer;
  distance: number;

  constructor(private http: HttpClient, private data: DataService) {

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
          animation: google.maps.Animation.BOUNCE,
          icon: "../assets/img/location.png"
        });

        marker.addListener('click', args => {
          this.map.panTo(marker.getPosition());
          console.log(marker.getPosition().lng() + " : " + marker.getPosition().lat());
          console.log(marker.getPlace())
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
    this.nearByPlace.push(marker);
  }


  // Search

  searchEvent() {

    this.map.addListener('click', args => {
      this.selectPlace = args.latLng;
      this.findDirection();

      console.log("select place : " + this.selectPlace);
      console.log(this.placeName);
    })

  }

  private geoLocate() {
    this.setMyLocation(this.myPos);
    let marker = new google.maps.Marker({
      position: this.myPos,
      title: 'My Current Location',
      animation: google.maps.Animation.BOUNCE,
      icon: "../assets/img/location.png"
    });
    this.setMyMarker(marker);
  }

  searchHostel() {

    this.clearMarker();
    this.directionDisplay.setMap(null);
    this.geoLocate();

    let request = ({
      location: this.myPos,
      radius: this.radius,
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
    this.directionDisplay.setMap(null);
    this.geoLocate();

    let requestShop = {
      location: this.myPos,
      radius: this.radius,
      type: 'shopping_mall'
    };
    let requestPark = {
      location: this.myPos,
      radius: this.radius,
      type: 'park'
    };
    let requestMovie = {
      location: this.myPos,
      radius: this.radius,
      type: 'movie_theater'
    };
    let requestNight = {
      location: this.myPos,
      radius: this.radius,
      type: 'night_club'
    };
    let requestAmuusement = {
      location: this.myPos,
      radius: this.radius,
      type: 'amusement_park'
    };
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(requestShop, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    });
    service.nearbySearch(requestPark, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    });
    service.nearbySearch(requestMovie, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    });
    service.nearbySearch(requestNight, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);

        }
      }
    });
    service.nearbySearch(requestAmuusement, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    });
  }

  searchRestaurant() {

    this.clearMarker();
    this.directionDisplay.setMap(null);
    this.geoLocate();

    let request = ({
      location: this.myPos,
      radius: this.radius,
      type: 'restaurant'
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
      this.placeName = place.name;
      console.log("select place : " + this.selectPlace);
      console.log("place name : " + place.name);
      this.findDirection();
    });

    this.nearByPlace.push(marker);
  }

  findDirection() {
    this.clearMarker();

    let request = {
      origin: this.myPos,
      destination: this.selectPlace,
      travelMode: TravelMode.DRIVING
    };
    this.directionDisplay.setMap(null);
    this.directionService.route(request, (result, status) => {
      if (status === DirectionsStatus.OK) {
        this.directionDisplay.setMap(this.map);
        this.directionDisplay.setDirections(result);
        let panel = document.getElementById('route-panel');
        this.directionDisplay.setPanel(panel);
        this.distance = parseFloat(this.directionDisplay.getDirections().routes[0].legs[0].distance.text);
        console.log("distance : " + this.distance + " km");
        this.setDistance(this.distance);
        this.placeName = result.routes[0].legs[0].end_address;
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

  clearMarker() {
    this.setMapOnAll(null);
    this.nearByPlace = [];
  }

  setMapOnAll(map) {
    for (let i = 0; i < this.nearByPlace.length; i++) {
      this.nearByPlace[i].setMap(map);
    }
  }

  searchActiveProvider() {
  }

  setDistance(distance: number) {
    this.data.setDistance(distance);
  }

}
