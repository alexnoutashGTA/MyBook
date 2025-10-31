import {Component, Input, Output} from '@angular/core';
import EventEmitter = require('node:events');
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink
  ],
  templateUrl: './side-menu.html',
  styleUrls: ['./side-menu.css']
})
export class SideMenu {
  @Input() title = ''; // decorate the property with @Input()
  @Output() menuClicked = new EventEmitter();

  homeLabel: String = "";
  messagesLabel: String = "";
  detailsLabel: String = "";

  constructor() {
    this.homeLabel = 'Home';
    this.messagesLabel = "Go to Messages";
    this.detailsLabel = "Go to Details";
  }
}
