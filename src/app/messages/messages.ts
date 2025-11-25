import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages  {

  saveMessage = (values: any) => {
    console.log(values);
  }

}
