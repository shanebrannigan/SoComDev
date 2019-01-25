import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from "../model/login";

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  user: string;
  pass: string;
  bar = 'bar';
  @Input() login: Login;
  @Output() loginAttempted = new EventEmitter<boolean>();
  @Output() foo = new EventEmitter<string>();
  @Output() loginSuccess = false;
  constructor() { }
  ngOnInit() {
  }

  tryLogin(): void {
    console.log(this.user);
    console.log(this.pass);
    this.loginSuccess = true;
    this.loginAttempted.emit(this.loginSuccess);
    this.foo.emit(this.bar);
  }
}
