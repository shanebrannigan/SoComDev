import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from '../model/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import {LoginService} from '../services/login-service';
import {LoginServiceHttp} from '../services/login-service-http';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css'],
  providers: [LoginServiceHttp]
})
export class HomeLoginComponent implements OnInit {
  user: string;
  pass: string;

  @Input() login: Login = new Login();

  bar = 'bar';
  @Output() loginAttempted = new EventEmitter<boolean>();
  @Output() foo = new EventEmitter<string>();
  @Output() loginSuccess = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private loginService: LoginServiceHttp) { }
  ngOnInit() {
  }

  tryLogin(): void {
    this.loginSuccess = true;
    this.loginAttempted.emit(this.loginSuccess);
    this.foo.emit(this.bar);
  }
  onSubmit() {
    // take our form values, set them to the login object
    this.login.name = this.loginForm.get('username').value;
    this.login.pass = this.loginForm.get('password').value;
    // use login service to attempt the login, if return true emit values to parent and proceed
    if (this.loginService.login(this.login))  {
      this.loginSuccess = true;
      this.loginAttempted.emit(this.loginSuccess);
      this.foo.emit(this.bar);
    }
  }
}
