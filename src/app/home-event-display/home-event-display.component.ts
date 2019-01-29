import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventServiceHttp} from '../services/event-service-http';
import {Event} from '../model/event';


@Component({
  selector: 'app-home-event-display',
  templateUrl: './home-event-display.component.html',
  styleUrls: ['./home-event-display.component.css'],
  providers: [EventServiceHttp]
})
export class HomeEventDisplayComponent implements OnInit {

  eventToDisplay: Event;

  constructor(private eventService: EventServiceHttp) {
  }

  ngOnInit() {
    // get the events, display them
    this.eventToDisplay = this.eventService.getEvent();
  }
}
