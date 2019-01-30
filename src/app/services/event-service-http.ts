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
}


