import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoComWebS';
  showlogin: boolean;

  login(input: boolean) {
    if (input) {
      console.log('login success');
      this.showlogin = true;
    } else {
      console.log('login failed');
      this.showlogin = false;
    }
  }

  printBar(input: string) {
    console.log(input);
  }
}


