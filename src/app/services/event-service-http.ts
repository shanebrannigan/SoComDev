import {EventService} from './event-service';
import {Event} from '../model/Event';

export class EventServiceHttp extends EventService {

  event: Event = new Event();
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
}


