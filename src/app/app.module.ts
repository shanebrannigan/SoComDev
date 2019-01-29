import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeSignupComponent } from './home-signup/home-signup.component';
import { HomeEventDisplayComponent } from './home-event-display/home-event-display.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventSignupComponent } from './event-signup/event-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    HomeSignupComponent,
    HomeEventDisplayComponent,
    EventSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
