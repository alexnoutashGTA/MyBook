import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient} from '@angular/common/http';
import { Messages } from './messages/messages';

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Messages,
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

