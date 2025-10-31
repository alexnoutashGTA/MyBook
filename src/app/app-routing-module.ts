import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Messages} from './messages/messages';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'messages',
      component: Messages,
    },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
