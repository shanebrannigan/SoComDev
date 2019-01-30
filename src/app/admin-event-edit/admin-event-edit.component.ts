import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventServiceHttp} from '../services/event-service-http';
import {Event} from '../model/event';

@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html',
  styleUrls: ['./admin-event-edit.component.css'],
  providers: [EventServiceHttp]
})
export class AdminEventEditComponent implements OnInit {

  eventEditForm: FormGroup;
  currentEvent: Event;


  constructor(private eventService: EventServiceHttp, private formBuilder: FormBuilder) {
    this.currentEvent = this.eventService.getEvent()

    this.eventEditForm = formBuilder.group({
      img: [this.currentEvent.img, Validators.required],
      title: [this.currentEvent.title, Validators.required],
      locale: [this.currentEvent.locale, Validators.required],
      date: [this.currentEvent.date, Validators.required],
      guestFee: [this.currentEvent.guestFee, Validators.required]
    });
  }

  ngOnInit() {
  }

  updateEvent() {
  }

}
