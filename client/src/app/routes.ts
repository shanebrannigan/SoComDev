import {Route, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {EventListComponent} from './components/event-list/event-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'event-list', component: EventListComponent},
      {path: '**', redirectTo: 'event-list'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/home'},
];
