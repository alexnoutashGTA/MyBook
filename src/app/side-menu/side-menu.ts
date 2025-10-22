import { Component } from '@angular/core';
import {App} from '../app';
import {MainService} from '../Services/main-service';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  standalone: true,
  styleUrl: './side-menu.css'
})
export class SideMenu {
  protected service: MainService;
   constructor(private srvc:MainService) {
      this.service=srvc;
   }
}
