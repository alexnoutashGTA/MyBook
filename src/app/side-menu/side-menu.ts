import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: false,
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

  linkClicked(i: number) {
    this.menuClicked.emit(i)
  }
}
