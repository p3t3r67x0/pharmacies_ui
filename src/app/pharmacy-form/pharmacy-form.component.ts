import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Pharmacy } from '../pharmacy';

@Component({
  selector: 'app-pharmacy-form',
  templateUrl: './pharmacy-form.component.html',
  styleUrls: ['./pharmacy-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmacyFormComponent implements OnInit {
  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  @Input() item: string;

  ngOnInit() {
    this.id = this.item['id'];
    this.oid = this.item['oid'];
    this.name = this.item['name'];
    this.adr = this.item['adr'];
    this.zip = this.item['zip'];
    this.city = this.item['city'];
    this.tel = this.item['tel'];
    this.web = this.item['web'];
    this.lat = this.item['lat'];
    this.lng = this.item['lng'];

    this.mo = this.item['mo'] || '';
    this.tu = this.item['tu'] || '';
    this.we = this.item['we'] || '';
    this.th = this.item['th'] || '';
    this.fr = this.item['fr'] || '';
    this.sa = this.item['sa'] || '';
    this.su = this.item['su'] || '';

    this.pharmacyModel = new Pharmacy(this.id, this.oid, this.name, this.adr, this.zip, this.city, this.tel, this.web, this.lat, this.lng, this.mo, this.tu, this.we, this.th, this.fr, this.sa, this.su);
  }

  pharmacyModel: Pharmacy;

  id: string;
  oid: string;
  name: string;
  adr: string;
  zip: string;
  city: string;
  tel: string;
  web: string;
  lat: string;
  lng: string;
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
  sa: string;
  su: string;

  onSubmit() {
    this.updatePharmacy();
  }

  updatePharmacy() {
    let that = this;
    this.apiService.updatePharmacy(this.pharmacyModel).subscribe(data => {
      that.oid = data.pharmacy.oid;
      that.cd.detectChanges();
    });
  }
};
