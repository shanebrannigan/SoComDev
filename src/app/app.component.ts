import { Component } from '@angular/core';
import {EventSignUp} from './model/event-signup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Social Committee Event Website';
  loggedIn: boolean;
  displayEvents: boolean;
  username = '';
  isAdmin: boolean;
  iWantToGo: boolean;
  loginSuccessful: boolean;

  login(input: boolean) {
    if (input) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  tryDisplayEvents(input: boolean) {
    if (input) {
      this.displayEvents = true;
    } else {
      this.displayEvents = false;
    }
  }

  logUsername(input: string) {
    this.username = input;

  }

  checkAdmin(input: boolean) {
    this.isAdmin = input;
  }

  iWantToGoMethod(input: boolean) {
    console.log('In here');
    if (input) {
      this.iWantToGo = true;
    }
  }

  cancelSignUpForm(input: boolean) {
    if (input) {
      this.iWantToGo = false;
    }
  }

  getEventSignUp(input: EventSignUp) {

  }

}
