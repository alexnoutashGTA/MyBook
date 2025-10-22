import  {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
declare var gtag: Function; // Declare gtag to avoid TypeScript errors

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'MyBook';
  breadCrumbTitle: string = 'Our Community App!';
  sideMenuTitle: string = 'Our Community App!';

  menuItemClicked($event: any) {
    console.log($event)
  }
  constructor(private router: Router) {}


}










