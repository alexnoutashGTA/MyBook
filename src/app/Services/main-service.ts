import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  homeLabel: string = "Home";
  detailsLabel: string = "Details";
  messagesLabel: string = "Messages";
  version : number = 102;
}
