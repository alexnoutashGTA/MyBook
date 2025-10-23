import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideMenu } from './side-menu/side-menu';
import { Home } from './home/home';
import {BreadCrumbMenu} from './bread-crumb-menu/bread-crumb-menu';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdsenseModule} from 'ng2-adsense';
import {GoogleMapsModule} from '@angular/google-maps';
import {ContentService} from './services/content-service';
import {provideHttpClient} from '@angular/common/http';
import { Faq } from './faq/faq';

@NgModule({
  declarations: [
    BreadCrumbMenu,
    App,
    SideMenu,
    Home,
    Faq,
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7871702403906324',
      adSlot: 7259870550,
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ContentService,    provideHttpClient(),
    { provide: Window, useValue: window }
  ],
  exports: [
   ],
  bootstrap: [App]
})
export class AppModule { }

