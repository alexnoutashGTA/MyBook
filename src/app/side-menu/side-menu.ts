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
  linkList: string[] = [];
  labelList: string[] = []


  constructor() {
    this.homeLabel ="Go to Home"
    this.messagesLabel = "Go to messages";
    this.detailsLabel = "Go to details";

    this.linkList=[];
    this.labelList =[];
  }

  linkClicked(i: number) {
    this.menuClicked.emit(i)
  }
}
