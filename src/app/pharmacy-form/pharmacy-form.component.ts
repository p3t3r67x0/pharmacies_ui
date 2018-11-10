import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Pharmacy } from '../pharmacy';

@Component({
  selector: 'app-pharmacy-form',
  templateUrl: './pharmacy-form.component.html',
  styleUrls: ['./pharmacy-form.component.css']
})
export class PharmacyFormComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  @Input() item: string;

  ngOnInit() {
    this.id = this.item['id'];
    this.name = this.item['name'];
    this.adr = this.item['adr'];
    this.zip = this.item['zip'];
    this.city = this.item['city'];
    this.tel = this.item['tel'];
    this.web = this.item['web'];
    this.model = new Pharmacy(this.id, this.name, this.adr, this.zip, this.city, this.tel, this.web);
  }

  model: Pharmacy;
  id: string;
  name: string;
  adr: string;
  zip: string;
  city: string;
  tel: string;
  web: string;

  onSubmit() {
    this.updatePharmacy(this.model);
    console.log(this.model);
  }

  updatePharmacy(data) {
    this.apiService.updatePharmacy(data).subscribe(data => {
      console.log(data);
    });
  }
};
