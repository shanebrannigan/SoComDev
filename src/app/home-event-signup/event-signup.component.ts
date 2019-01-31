import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  @Input() userName: string;
  @Output() cancelSignUpForm = new EventEmitter<boolean>();
  @Output() formCancelled = false;
  showSignUp = false;
  showAddQuestions = false;

  signUpForm: FormGroup;
  formSubmitted = false;
  eventSignUp = new EventSignUp;
  eventToDisplay: Event;

  buildForm() {
    this.signUpForm = this.formBuilder.group({
      isGoingToEvent: [false],
      isMember: [false],
      isBringingGuest: [false],
      guestName: [null]
    });
  }

  constructor(private eventService: EventServiceHttp, private formBuilder: FormBuilder) {

  }

  setGuestNameValidity() {
    const guestNameControl = this.signUpForm.get('guestName');

    this.signUpForm.get('isBringingGuest').valueChanges
      .subscribe(isBringingGuest => {

        if (isBringingGuest) {
          guestNameControl.setValidators(Validators.required);
        } else {
          guestNameControl.setValidators(null);
        }

        guestNameControl.updateValueAndValidity();
      });
  }

  onFormSubmit() {
    console.log('Form Submitted',
      this.eventSignUp.isGoingToEvent,
      this.eventSignUp.isMember,
      this.eventSignUp.isBringingGuest,
      this.eventSignUp.guestName
      );
      this.formSubmitted = true;

    if (this.signUpForm.valid) {
      this.eventSignUp.isGoingToEvent = this.signUpForm.get('isGoingToEvent').value;
      this.eventSignUp.isMember = this.signUpForm.get('isMember').value;
      this.eventSignUp.isBringingGuest = this.signUpForm.get('isBringingGuest').value;
      this.eventSignUp.guestName = this.signUpForm.get('guestName').value;

      if (this.eventSignUp.isGoingToEvent) {
        this.eventSignUp.confirmation = true;
      } else {
        this.eventSignUp.confirmation = false;
      }
      this.showSignUp = false;
    }
  }

  clearSelected() {
    this.showSignUp = false;
  }

  clickIWantToGo() {
    this.showSignUp = true;
  }

  showGoingForm() {
    if (!this.eventSignUp.isGoingToEvent) {
      this.showAddQuestions = true;
    } else {
      this.showAddQuestions = false;
      this.eventSignUp.isMember = false;
      this.eventSignUp.isBringingGuest = false;
    }

    this.setGuestNameValidity();
  }

  ngOnInit() {
    this.eventService.getUserDetails();
    this.buildForm();
    this.setGuestNameValidity();
    this.eventToDisplay = this.eventService.getEvent();
  }

}

