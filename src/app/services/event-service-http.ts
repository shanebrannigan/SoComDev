import {EventService} from './event-service';
import {Event} from '../model/event';
import {EventSignUp} from '../model/event-signup';

export class EventServiceHttp extends EventService {

  event: Event = new Event();
  userDetails: EventSignUp = new EventSignUp();

  constructor() {
    super();
    this.event.img = 'IMG';
    this.event.title = 'Grand Ball';
    this.event.info = 'Really cool event';
    this.event.locale = 'Belfast';
    this.event.date = '11/01/20';
    this.event.guestFee = 123;
  }

  createNewEvent(event: Event) {
    return true;
  }

  getEvent() {
    return this.event;
  }

  adminCreateEvent(event: Event) {
    return true;
  }

  adminEditCurrentEvent(event: Event) {
    this.event = event;
    return true;
  }

  adminExportAttendenceCurrentEvent(event: Event) {
    return true;
  }

  getUserDetails() {
    return this.userDetails;
  }

  updateUserDetails(eventSignUp: EventSignUp) {
    this.userDetails = eventSignUp;
  }
}


