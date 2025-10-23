import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';
import {Faq} from './faq/faq';
import {AboutUs} from './about-us/about-us';


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
    {
      path: 'aboutus',
      component: AboutUs,
    },



  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
