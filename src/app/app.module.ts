import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PharmacyFormComponent } from './pharmacy-form/pharmacy-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MapComponent } from './map/map.component';
import { CitiesComponent } from './cities/cities.component';
import { CityFormComponent } from './city-form/city-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PharmacyFormComponent,
    NavigationComponent,
    MapComponent,
    CitiesComponent,
    CityFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxTypeaheadModule,
    LeafletModule.forRoot(),
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
