import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { icon, marker, latLng, Map, Layer, geoJSON, tileLayer } from 'leaflet';
import { environment } from '../../environments/environment';
import { leafletSearch } from 'leaflet-search';
import { ApiService } from '../api.service';

export class Search {
  constructor(
    public q: string
  ) { }
}


@Component({
  selector: 'map-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  markerIcon = icon({
    iconAnchor: [13, 41],
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png'
  });

  map: Map;
  formControlValue = '';
  geojson: any;
  name: string;
  adr: string;
  zip: string;
  city: string;
  tel: string;
  web: string;
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
  sa: string;
  su: string;
  q: string = '';


  searchFormModel = new Search(this.q);

  url = environment.apiBaseUrl + '/api/search/autocomplete';
  api = 'http';
  params = {};

  mapLayer = tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://carto.com/attributions">Carto</a>',
    subdomains: 'abcd',
    detectRetina: false,
    maxZoom: 17,
    minZoom: 1
  });

  options = {
    layers: [this.mapLayer],
    center: latLng([53.551086, 9.993682]),
    zoom: 17
  };

  handleHttpResultSelected(result) {
    this.q = result;
    this.reqSearchResults(result);
  }

  onMapReady(map: Map) {
    this.map = map;
    this.getGeoJsonPharmacies(map);
  }

  onSubmit() {
    this.reqSearchResults(this.q);
  }

  onMapMove(event) {
    // this.map.removeLayer(this.geojson);
    // this.getGeoJsonPharmacies(this.map);
  }

  reqSearchResults(searchQuery) {
    let that = this;
    let map = this.map;

    this.map.removeLayer(this.geojson);

    this.apiService.getGeoJsonSearchPharmacies(searchQuery).subscribe(data => {
      that.geojson = geoJSON(data['pharmacies'], {
        pointToLayer: function(feature, latlng) {
          return marker(latlng, { icon: that.markerIcon });
        },
        onEachFeature: function(feature, layer) {
          layer.on('click', <LeafletMouseEvent>(e) => {
            map.setView(e.target.getLatLng(), 17);
            that.name = feature.properties.name;
            that.adr = feature.properties.adr;
            that.zip = feature.properties.zip;
            that.city = feature.properties.city;
            that.tel = feature.properties.tel;
            that.web = feature.properties.web;
            that.mo = feature.properties.mo;
            that.tu = feature.properties.tu;
            that.we = feature.properties.we;
            that.th = feature.properties.th;
            that.fr = feature.properties.fr;
            that.sa = feature.properties.sa;
            that.su = feature.properties.su;
            that.cd.detectChanges();
          });
        }
      }).addTo(that.map);

      map.fitBounds(that.geojson.getBounds());
    });
  }

  getGeoJsonPharmacies(map) {
    let that = this;

    let bounds = {
      'x1': map.getBounds()._southWest.lng,
      'x2': map.getBounds()._northEast.lng,
      'y1': map.getBounds()._southWest.lat,
      'y2': map.getBounds()._northEast.lat
    }

    this.apiService.getGeoJsonPharmacies(bounds).subscribe(data => {
      that.geojson = geoJSON(data['pharmacies'], {
        pointToLayer: function(feature, latlng) {
          return marker(latlng, { icon: that.markerIcon });
        },
        onEachFeature: function(feature, layer) {
          layer.on('click', <LeafletMouseEvent>(e) => {
            map.setView(e.target.getLatLng(), 17);
            that.name = feature.properties.name;
            that.adr = feature.properties.adr;
            that.zip = feature.properties.zip;
            that.city = feature.properties.city;
            that.tel = feature.properties.tel;
            that.web = feature.properties.web;
            that.mo = feature.properties.mo;
            that.tu = feature.properties.tu;
            that.we = feature.properties.we;
            that.th = feature.properties.th;
            that.fr = feature.properties.fr;
            that.sa = feature.properties.sa;
            that.su = feature.properties.su;
            that.cd.detectChanges();
          });
        }
      }).addTo(that.map);
    });
  }
}
