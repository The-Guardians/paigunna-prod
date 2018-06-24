import {Component, ElementRef, OnInit, Provider, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {} from "@types/googlemaps";

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


  searchEvent() {
    this.map.addListener('click', args => {
      let marker = new google.maps.Marker({
        position: args.latLng,
        map: this.map,
        animation: google.maps.Animation.BOUNCE
      });

      marker.addListener('click', args => {
        marker.setMap(null);
      })
    })

  }

  setMyLocation(pos: any) {
    this.myPos = pos;
  }

  setMyMarker(marker: any) {
    this.myMarker = marker;
    this.myMarker.setMap(this.map);
  }

  searchHostel() {
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
      marker.setMap(null);
    })
  }

  searchActiveProvider() {
  }

}
