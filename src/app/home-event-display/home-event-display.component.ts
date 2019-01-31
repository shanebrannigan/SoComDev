import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventServiceHttp} from '../services/event-service-http';
import {Event} from '../model/event';
import {EventSignUp} from '../model/event-signup';


@Component({
  selector: 'app-home-event-display',
  templateUrl: './home-event-display.component.html',
  styleUrls: ['./home-event-display.component.css'],
  providers: [EventServiceHttp]
})
export class HomeEventDisplayComponent implements OnInit {
  @Input() eventSignUp: EventSignUp;

  eventToDisplay: Event;

  constructor(private eventService: EventServiceHttp) {
  }

  ngOnInit() {
    // get the events, display them
    // TODO: this needs to be a reactive stream update - so that when admin edits it it updates...
    this.eventToDisplay = this.eventService.getEvent();
  }
}
