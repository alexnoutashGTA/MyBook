import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    { provide: Window, useValue: window }
  ],
  exports: [
   ],
  bootstrap: [App]
})
export class AppModule { }

