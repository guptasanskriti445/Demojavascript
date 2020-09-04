import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapsearchComponent} from './mapsearch/mapsearch.component';
import { DetailComponent} from './detail/detail.component';
import {SignupformComponent} from './signupform/signupform.component';
import {LoginformComponent} from './loginform/loginform.component';
import {HomeComponent} from './home/home.component';
import {SearchlistingComponent} from './searchlisting/searchlisting.component';
import {FormsignupComponent} from './formsignup/formsignup.component';
import {MapComponent} from './map/map.component';
import{SlidegellaryComponent} from './slidegellary/slidegellary.component'

const routes: Routes = [
  {path:  "", pathMatch:  "full",component: HomeComponent},
  {path: "home",  redirectTo:  "" },
  { path: 'search', component: SearchlistingComponent},
   { path: 'mapsearch', component: MapsearchComponent},
   { path: 'detail', component: DetailComponent},
  { path: 'signup', component: SignupformComponent },
  { path: 'login', component: LoginformComponent},
  { path: 'SignupForm', component: FormsignupComponent},
  { path: 'map', component: MapComponent},
  { path: 'Slidegellary', component: SlidegellaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
