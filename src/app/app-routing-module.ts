import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Messages} from './messages/messages';
import {Home} from './home/home';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: Home,
    },
    {
      path: 'messages',
      component: Messages,
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
