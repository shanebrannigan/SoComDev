import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventSignUp} from '../model/event-signup';
import {EventServiceHttp} from '../services/event-service-http';
import {Event} from '../model/event';

@Component({
  selector: 'app-event-signup',
  templateUrl: './event-signup.component.html',
  styleUrls: ['./event-signup.component.css'],
  providers: [EventServiceHttp]
})
export class EventSignupComponent implements OnInit {
  @Output() cancelSignUpForm = new EventEmitter<boolean>();
  @Output() formCancelled = false;

  eventToDisplay: Event;

  signUpForm = new FormGroup({
    isGoingToEvent: new FormControl(false, Validators.requiredTrue),
    isMember: new FormControl(false),
    isBringingGuest: new FormControl(false),
    guestName: new FormControl('')
  });

  eventSignUp = new EventSignUp;

  constructor(private eventService: EventServiceHttp) {
    this.eventSignUp.isGoingToEvent = false;
    this.eventSignUp.isMember = false;
    this.eventSignUp.isBringingGuest = false;
    this.eventSignUp.guestName = null;
    this.eventSignUp.confirmation = false;
  }

  onFormSubmit() {
    console.log('Form Submitted',
      this.eventSignUp.isGoingToEvent,
      this.eventSignUp.isMember,
      this.eventSignUp.isBringingGuest,
      this.eventSignUp.guestName
      );
    this.eventSignUp.isGoingToEvent = this.signUpForm.get('isGoingToEvent').value;
    this.eventSignUp.isMember = this.signUpForm.get('isMember').value;
    this.eventSignUp.isBringingGuest = this.signUpForm.get('isBringingGuest').value;
    this.eventSignUp.guestName = this.signUpForm.get('guestName').value;
    this.eventSignUp.confirmation = true;
  }

  clearSelected() {
    this.formCancelled = true;
    this.cancelSignUpForm.emit(this.formCancelled);
  }

  ngOnInit() {
    this.eventToDisplay = this.eventService.getEvent();
  }

}

