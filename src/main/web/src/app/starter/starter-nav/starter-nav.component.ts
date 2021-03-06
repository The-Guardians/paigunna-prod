import {Component, OnInit, ViewChild} from '@angular/core';
import {MapComponent} from "../../map/map.component";
import {User} from "../../../generated-model/model";
import {AuthService} from "../../providers/auth.service";

@Component({
  selector: 'app-starter-nav',
  templateUrl: './starter-nav.component.html',
  styleUrls: ['./starter-nav.component.css']
})

export class StarterNavComponent implements OnInit {

  @ViewChild(MapComponent) mapComponent;

  placeSearch: string;

  user: User;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('only after THIS EVENT "child" is usable!!');
  }

  textChange() {
    console.log(this.placeSearch);
  }

}
