import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-bread-crumb-menu',
  standalone: false,
  templateUrl: './bread-crumb-menu.html',
  styleUrl: './bread-crumb-menu.css'
})
export class BreadCrumbMenu {
  @Input() title = ''; // decorate the property with @Input()
  @Output() menuClicked = new EventEmitter();

  homeLabel: String = "";
  messagesLabel: String = "";
  detailsLabel: String = "";
  homelink: string = "";
  messageLink: string ="";
  detailLink: string = "";
  linkList: string[] = [];
  labelList: string[] = []





  constructor() {
    this.homeLabel = "";
    this.messagesLabel = "";
    this.detailsLabel = "";
    this.linkList= [];
    this.labelList = [];
  }

  linkClicked(i: number) {
    this.menuClicked.emit(i)
  }
}
