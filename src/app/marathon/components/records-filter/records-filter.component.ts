import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-records-filter',
  templateUrl: './records-filter.component.html',
  styleUrls: ['./records-filter.component.css']
})
export class RecordsFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterChanged.emit(filterValue);
  }
}
