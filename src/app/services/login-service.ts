import {Login} from '../model/login';

export abstract class LoginService {

  abstract login(login: Login): boolean;

}
