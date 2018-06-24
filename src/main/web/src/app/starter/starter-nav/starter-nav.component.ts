import {Component, OnInit, ViewChild} from '@angular/core';
import {MapComponent} from "../../map/map.component";
@Component({
  selector: 'app-starter-nav',
  templateUrl: './starter-nav.component.html',
  styleUrls: ['./starter-nav.component.css']
})

export class StarterNavComponent implements OnInit {

  @ViewChild(MapComponent) mapComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('only after THIS EVENT "child" is usable!!');
    this.mapComponent.searchRestaurant();
  }
}
