import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeSignupComponent } from './home-signup/home-signup.component';
import { HomeEventDisplayComponent } from './home-event-display/home-event-display.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminEventCreateComponent } from './admin-event-create/admin-event-create.component';
import {EventSignupComponent} from './home-event-signup/event-signup.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { AdminEventAttendanceComponent } from './admin-event-attendance/admin-event-attendance.component';
import { AdminEventEditComponent } from './admin-event-edit/admin-event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    HomeSignupComponent,
    HomeEventDisplayComponent,
    AdminEventCreateComponent,
    EventSignupComponent,
    HomeFooterComponent,
    AdminEventAttendanceComponent,
    AdminEventEditComponent
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
