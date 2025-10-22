import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: Home,
    },


  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
