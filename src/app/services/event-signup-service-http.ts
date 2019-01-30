import {EventSignUpService} from './event-signup-service';
import {EventSignUp} from '../model/event-signup';

export class EventSignUpServiceHttp extends EventSignUpService {

  eventSignUp = new EventSignUp();

  updateCurrentUser(currentUser: string) {
    this.eventSignUp.currentUser = currentUser;
  }

  getEventSignUp() {
    return this.eventSignUp;
  }

}
