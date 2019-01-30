import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() uname: string;
  @Output () displayAllEvents = new EventEmitter<boolean>();
  @Output() showEventSignUpForm = new EventEmitter<boolean>();
  @Output() showSignUp = false;

  eventToDisplay: Event;

  constructor(private eventService: EventServiceHttp) {
  }

  ngOnInit() {
    // get the events, display them
    this.eventToDisplay = this.eventService.getEvent();
    console.log(this.uname);
  }

  showPreviousEvents() {
    this.displayAllEvents.emit(true);
  }

  onClickIWantToGo() {
    console.log('show events!');
    this.showSignUp = true;
    console.log(this.showSignUp);
    this.showEventSignUpForm.emit(this.showSignUp);
  }
}
