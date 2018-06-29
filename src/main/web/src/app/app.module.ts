import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {RouterModule} from '@angular/router';
import {StarterComponent} from './starter/starter.component';
import {StarterNavComponent} from './starter/starter-nav/starter-nav.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2"
import {MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,} from "@angular/material";
import { LoginComponent } from './login/login.component';
import {AuthService} from "./providers/auth.service";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import { ConfirmComponent } from './confirm/confirm.component';
import { CalPriceComponent } from './cal-price/cal-price.component';
import { SelectTypeComponent } from './select-type/select-type.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StarterComponent,
    StarterNavComponent,
    LoginComponent,
    ConfirmComponent,
    CalPriceComponent,
    SelectTypeComponent,
    PaymentComponent,
    HistoryComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: StarterComponent,
        data: {title: 'หน้าหลัก', iconClass: 'fa fa-home'},
        children: [
        ]

      }
    ]),
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
