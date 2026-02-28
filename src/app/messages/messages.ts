import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages  {

  saveMessage = () => {
    console.log(this.firstName+' '+this.lastName+' '+ this.phoneNumber+' '+ this.password);
  }

  firstName: string ="";
  lastName: string ="";
  phoneNumber: string ="";
  password: string="";
  firstNameLabel: string = "*First Name";
  lastnameId: string = "lastname";
  isActiveStudent: boolean = true;
  dateOfBirth: any;
}
