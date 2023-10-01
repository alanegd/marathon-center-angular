import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  options = [
    { path: '/home', title: 'Home'},
    { path: '/marathon/records', title: 'Records'},
  ]
}
