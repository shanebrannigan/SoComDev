import {LoginService} from './login-service';
import {Login} from '../model/login';

const useracc = new Login();
useracc.name = 'admin';
useracc.pass = 'pass';

export class LoginServiceHttp extends LoginService {

  constructor() {
    super();

  }

  login(login: Login) {
    if (login.name === useracc.name && login.pass === useracc.pass) {
      console.log('login successful');
      return true;
    } else {
      return false;
      console.log('login failed');
    }
  }


}


