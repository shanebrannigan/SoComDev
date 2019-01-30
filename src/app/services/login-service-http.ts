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
    console.log('attempting login');
    console.log(login.name);
    if (login.name === useracc.name && login.pass === useracc.pass) {
      console.log('login successful');
      return true;
    } else {
      console.log('login failed');
      return false;

    }
  }


}


