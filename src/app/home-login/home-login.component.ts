import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from '../model/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import {LoginService} from '../services/login-service';
import {LoginServiceHttp} from '../services/login-service-http';
import {EventSignUp} from '../model/event-signup';
import {EventSignUpServiceHttp} from '../services/event-signup-service-http';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css'],
  providers: [LoginServiceHttp, EventSignUpServiceHttp]
})
export class HomeLoginComponent implements OnInit {
  @Input() login: Login = new Login();
  @Output() loginAttempted = new EventEmitter<boolean>();
  @Output() foo = new EventEmitter<string>();
  @Output() loginSuccess = false;
  @Output() currentUserObj = new EventEmitter<EventSignUp>();

  loginFailed = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginServiceHttp, private eventSignUpService: EventSignUpServiceHttp) { }

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
    // use login service to attempt the login, if return true emit values to parent and proceed
    if (this.loginService.login(this.login))  {
      this.loginSuccess = true;
      this.loginAttempted.emit(this.loginSuccess);
    }
    this.loginFailed = true;
  }
}
