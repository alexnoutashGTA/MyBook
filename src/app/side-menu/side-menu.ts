import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  standalone: true,
  styleUrl: './side-menu.css'
})
export class SideMenu {
   homeLabel: string = 'Go to Home';
   detailsLabel: string = 'Go to Details';
   messagesLabel: string = 'Go to Messages';
   version : number = 101;
}
