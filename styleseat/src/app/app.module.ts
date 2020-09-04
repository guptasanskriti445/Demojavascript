import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker' ;
import { BsDropdownModule} from 'ngx-bootstrap/dropdown' ;
import { ModalModule } from 'ngx-bootstrap/modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { DicoverandbookComponent } from './dicoverandbook/dicoverandbook.component';
import { StepintoyourswaggerComponent } from './stepintoyourswagger/stepintoyourswagger.component';
import { StylelistsandbarbersComponent } from './stylelistsandbarbers/stylelistsandbarbers.component';
import { StyleseatproComponent } from './styleseatpro/styleseatpro.component';
import { ForbeswwdfortunetechComponent } from './forbeswwdfortunetech/forbeswwdfortunetech.component';
import { BrowsepopularservicesComponent } from './browsepopularservices/browsepopularservices.component';
import { FooterComponent } from './footer/footer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { MapsearchComponent } from './mapsearch/mapsearch.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListingallComponent } from './listingall/listingall.component';
import { ListingbusinessComponent } from './listingbusiness/listingbusiness.component';
import { ListinghousecallComponent } from './listinghousecall/listinghousecall.component';
import { ListingvirtualComponent } from './listingvirtual/listingvirtual.component';
import { SearchlistingComponent } from './searchlisting/searchlisting.component';
import { ListingComponent } from './listing/listing.component';
import { FormsignupComponent } from './formsignup/formsignup.component';
import { MapComponent } from './map/map.component';
import { SlidegellaryComponent } from './slidegellary/slidegellary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DicoverandbookComponent,
    StepintoyourswaggerComponent,
    StylelistsandbarbersComponent,
    StyleseatproComponent,
    ForbeswwdfortunetechComponent,
    BrowsepopularservicesComponent,
    FooterComponent,
    LoginformComponent,
    SignupformComponent,
    MapsearchComponent,
    HomeComponent,
    DetailComponent,
    ListingallComponent,
    ListingbusinessComponent,
    ListinghousecallComponent,
    ListingvirtualComponent,
    SearchlistingComponent,
    ListingComponent,
    FormsignupComponent,
    MapComponent,
    SlidegellaryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
