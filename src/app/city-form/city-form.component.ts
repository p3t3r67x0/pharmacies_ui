import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { City } from '../city';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  @Input() item: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.id = this.item['id'];
    this.zip = this.item['zip'];
    this.city = this.item['city'];
    this.county = this.item['county'];
    this.country = this.item['country'];
    this.citizen = this.item['citizen'];
    this.lat = this.item['lat'];
    this.lng = this.item['lng'];

    this.citiesModel = new City(this.id, this.zip, this.city, this.county, this.country, this.citizen, this.lat, this.lng);
  }

  citiesModel: City;

  id: string;
  zip: string;
  city: string;
  county: string;
  country: string;
  citizen: string;
  lat: string;
  lng: string;

  onSubmit() {
    console.log('UPDATE entry');
    this.updateCity();
  }

  updateCity() {
    let that = this;
    this.apiService.updateCity(this.citiesModel).subscribe(data => {
      console.log(data);
      // that.cd.detectChanges();
    });
  }
}
