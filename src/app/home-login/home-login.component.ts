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
  @Input() login: Login = new Login();
  @Output() loginAttempted = new EventEmitter<boolean>();
  @Output() uname = new EventEmitter<string>();
  @Output() loginSuccess = false;

  currentUser: string;

  loginFailed = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginServiceHttp) { }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    // take our form values, set them to the login object
    this.login.name = this.loginForm.get('username').value;
    this.login.pass = this.loginForm.get('password').value;
    this.currentUser = this.login.name;
    // use login service to attempt the login, if return true emit values to parent and proceed
    if (this.loginService.login(this.login))  {
      this.loginSuccess = true;
      this.loginAttempted.emit(this.loginSuccess);
      this.uname.emit(this.loginForm.get('username').value);
    }
    this.loginFailed = true;
  }
}
