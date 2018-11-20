import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getGeoJsonPharmacies(mapBounds) {
    let apiUrl = environment.apiBaseUrl + '/api/pharmacies/geojson?x1=' + mapBounds.x1 + '&x2=' + mapBounds.x2 + '&y1=' + mapBounds.y1 + '&y2=' + mapBounds.y2;
    return this.http.get(apiUrl);
  }

  getGeoJsonSearchPharmacies(query) {
    let apiUrl = environment.apiBaseUrl + '/api/pharmacies/geojson/search?q=' + query;
    return this.http.get(apiUrl);
  }

  getPharmacies(page) {
    let apiUrl = environment.apiBaseUrl + '/api/pharmacies?page=' + page;
    return this.http.get(apiUrl);
  }

  searchPharmacies(search) {
    let apiUrl = environment.apiBaseUrl + '/api/search?search=' + search;
    return this.http.get(apiUrl);
  }

  updatePharmacy(data) {
    let apiUrl = environment.apiBaseUrl + '/api/pharmacy/' + data['id'];
    return this.http.put(apiUrl, data);
  }

  updateCity(data) {
    let apiUrl = environment.apiBaseUrl + '/api/city/' + data['id'];
    return this.http.put(apiUrl, data);
  }

  getCities(page) {
    let apiUrl = environment.apiBaseUrl + '/api/cities?page=' + page;
    return this.http.get(apiUrl);
  }
}
