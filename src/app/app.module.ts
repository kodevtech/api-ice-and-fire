import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import {AppRouting} from "./app.routing";
import {IceAndFireService} from "./shared/services/api-ice-fire.service";
import { HousesComponent } from './houses/houses.component';
import {BusyConfig, BusyModule} from "angular2-busy";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    HomeComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    BrowserAnimationsModule,
    BusyModule.forRoot(<BusyConfig>{
        message: 'Loading...',
        backdrop: true,
        template: '<div class="loader">{{message}}</div>',
        wrapperClass: 'ng-busy'
      }
    ),
  ],
  providers: [
    IceAndFireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
