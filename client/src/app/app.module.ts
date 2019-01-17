import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {LoginComponent} from './components/login/login.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {JwtService} from './services/jwt.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {EmployeeService} from './services/employee.service';
import {JwtInterceptor} from './interceptors/jwt-interceptor';
import {PlannedEventService} from './services/planned-event.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    JwtService,
    EmployeeService,
    PlannedEventService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
