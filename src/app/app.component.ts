import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Social Committee Event Website';
  loggedIn: boolean;
  iWantToGo: boolean;

  login(input: boolean) {
    if (input) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
  iWantToGoMethod(input: boolean) {
    console.log('In here');
    if (input) {
      this.iWantToGo = true;
    }
  }

}


