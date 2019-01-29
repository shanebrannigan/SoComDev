import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeSignupComponent } from './home-signup/home-signup.component';
import { HomeEventDisplayComponent } from './home-event-display/home-event-display.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminEventCreateComponent } from './admin-event-create/admin-event-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    HomeSignupComponent,
    HomeEventDisplayComponent,
    AdminEventCreateComponent
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
