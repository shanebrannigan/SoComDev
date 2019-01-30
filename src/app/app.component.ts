import { Component } from '@angular/core';

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
  iWantToGo: boolean;

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
  iWantToGoMethod(input: boolean) {
    console.log('In here');
    if (input) {
      this.iWantToGo = true;
    }
  }
}


