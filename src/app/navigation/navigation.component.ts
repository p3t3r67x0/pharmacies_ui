import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() searchTerm = new EventEmitter<any>();

  search(event) {
    // console.log(event.target.value);
    this.searchTerm.emit(event.target.value);
  }
}
