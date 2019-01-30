import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventSignUp} from '../model/event-signup';

@Component({
  selector: 'app-event-signup',
  templateUrl: './event-signup.component.html',
  styleUrls: ['./event-signup.component.css']
})
export class EventSignupComponent implements OnInit {

  isValidFormSubmitted: boolean = null;

  signUpForm = new FormGroup({
    isGoingToEvent: new FormControl(false, Validators.requiredTrue),
    isMember: new FormControl(false),
    isBringingGuest: new FormControl(false),
    guestName: new FormControl('')
  });

  eventSignUp = new EventSignUp();

  constructor() { }

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

  }

  clearSelected() {

  }

  ngOnInit() {
  }

}

