import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDetailRoutingModule } from './lazy-detail-routing-module';
import {LazyMessagesModule} from "../lazy-messages/lazy-messages-module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [

  ],
    imports: [
        CommonModule,
        LazyDetailRoutingModule,
        LazyMessagesModule,
        FormsModule
    ]
})
export class LazyDetailModule { }
