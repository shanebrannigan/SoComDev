import {Event} from '../model/event';

export abstract class EventService {

  abstract getEvent(event: Event): Event;

}
