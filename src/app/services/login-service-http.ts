import {LoginService} from './login-service';
import {Login} from '../model/login';

const useracc = new Login();
useracc.name = 'admin';
useracc.pass = 'pass';
const useracc2 = new Login();
useracc2.name = 'matt';
useracc2.name = 'pass';
const adminName = 'admin';


export class LoginServiceHttp extends LoginService {

  constructor() {
    super();

  }

  login(login: Login) {
    console.log('attempting login');
    console.log(login.name);
    if ((login.name === 'admin')) {
      console.log('login successful');
      return true;
    } else {
      if (login.name === 'matt') {
        console.log('login successful');
        return true;
      }
      console.log('login failed');
      return false;

    }
  }
  checkAdmin(uname: string): boolean {
    if (uname === adminName) {
      return true;
    }
    return false;
  }


}


