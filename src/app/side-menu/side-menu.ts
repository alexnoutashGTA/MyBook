import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  standalone: true,
  styleUrl: './side-menu.css'
})
export class SideMenu {
   homeLable: string = 'home';
   detailsLable: string = 'details';
   messagesLable: string = 'messages';
   version : number = 99;
}
