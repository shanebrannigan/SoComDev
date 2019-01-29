import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Committee Event Website';
  showlogin: boolean;

  login(input: boolean) {
    if (input) {
      this.showlogin = true;
    } else {
      this.showlogin = false;
    }
  }

  printBar(input: string) {
    console.log(input);
  }
}


