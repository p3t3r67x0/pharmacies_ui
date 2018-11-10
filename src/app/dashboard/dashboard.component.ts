import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  nextPagination = 0;
  prevPagination = 0;
  pharmacyData = {};


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let page;

      if (params['page']) {
        page = params['page'];
      }
      else {
        page = 1;
      }

      this.showPharmacies(page);
    });
  }

  showPharmacies(page) {
    this.apiService.getPharmacies(page).subscribe(data => {
      this.nextPagination = data['next'];
      this.prevPagination = data['prev'];
      this.pharmacyData = data;

      console.log(this.pharmacyData);
    });
  }

  searchPharmacies(search) {
    this.apiService.searchPharmacies(search).subscribe(data => {
      this.nextPagination = data['next'];
      this.prevPagination = data['prev'];
      this.pharmacyData = data;

      console.log(this.pharmacyData);
    });
  }
}
