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
}


