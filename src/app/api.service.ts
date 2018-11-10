import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getPharmacies(page) {
    let apiUrl = 'http://localhost:5000/api/pharmacies?page=' + page;
    return this.http.get(apiUrl);
  }

  searchPharmacies(search) {
    let apiUrl = 'http://localhost:5000/api/search?search=' + search;
    return this.http.get(apiUrl);
  }

  updatePharmacy(data) {
    let apiUrl = 'http://localhost:5000/api/pharmacy/' + data['id'];
    return this.http.put(apiUrl, data);
  }
}
