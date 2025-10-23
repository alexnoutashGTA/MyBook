import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';
import {Faq} from './faq/faq';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: Home,
    },
    {
      path: 'faq',
      component: Faq,
    },



  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
