import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  nextPagination = 0;
  prevPagination = 0;
  citiesData = {};

  ngOnInit() {
    this.showCities(1);
  }

  showCities(page) {
    this.apiService.getCities(page).subscribe(data => {
      this.nextPagination = data['next'];
      this.prevPagination = data['prev'];
      this.citiesData = data;

      console.log(this.citiesData);
    });
  }

}
