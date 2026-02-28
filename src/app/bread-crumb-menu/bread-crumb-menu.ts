import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ContentService} from '../content-service';


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

  constructor(localReferenceService : ContentService) {
    this.homeLabel = localReferenceService.homeLabel;
    this.messagesLabel = localReferenceService.messagesLabel
    this.detailsLabel = localReferenceService.detailsLabel;
  }
  linkClicked(i: number) {
    this.menuClicked.emit(i)
  }
}
