import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getGeoJsonPharmacies(mapBounds) {
    let apiUrl = 'http://localhost:5000/api/pharmacies/geojson?x1=' + mapBounds.x1 + '&x2=' + mapBounds.x2 + '&y1=' + mapBounds.y1 + '&y2=' + mapBounds.y2;
    return this.http.get(apiUrl);
  }

  getGeoJsonSearchPharmacies(query) {
    let apiUrl = 'http://localhost:5000/api/pharmacies/geojson/search?q=' + query;
    return this.http.get(apiUrl);
  }

  getPharmacies(page) {
    let apiUrl = 'http://localhost:5000/api/pharmacies?page=' + page;
    return this.http.get(apiUrl);
  }

  searchPharmacies(search) {
    let apiUrl = 'http://localhost:5000/api/search?search=' + search;
    return this.http.get(apiUrl);
  }

  createOpening(data) {
    let apiUrl = 'http://localhost:5000/api/opening';
    return this.http.post(apiUrl, data);
  }

  updatePharmacy(data) {
    let apiUrl = 'http://localhost:5000/api/pharmacy/' + data['id'];
    return this.http.put(apiUrl, data);
  }
}
