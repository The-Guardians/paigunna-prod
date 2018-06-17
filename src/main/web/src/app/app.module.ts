import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StarterComponent} from './starter/starter.component';
import {AgmCoreModule} from '@agm/core';
import {StarterNavComponent} from './starter/starter-nav/starter-nav.component';
import {StarterSideNavComponent} from './starter/starter-side-nav/starter-side-nav.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    DashboardComponent,
    StarterComponent,
    StarterNavComponent,
    StarterSideNavComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGwr9WxsGbt0jQdllJbQANHcQ7FMj7FpU'
    }),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: '',
        component: StarterComponent,
        data: {title: 'หน้าหลัก', iconClass: 'fa fa-home'},
        children: [
          {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
          {path: 'map', component: MapComponent, pathMatch: 'full'}
        ]

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
