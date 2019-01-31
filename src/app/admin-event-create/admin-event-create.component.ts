import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventServiceHttp} from '../services/event-service-http';
import {Event} from '../model/event';

@Component({
  selector: 'app-admin-event-create',
  templateUrl: './admin-event-create.component.html',
  styleUrls: ['./admin-event-create.component.css']
})
export class AdminEventCreateComponent implements OnInit {

  eventCreated = false;

  event: Event = new Event();

  createEventForm = this.fb.group({
    img: ['', Validators.required],
    title: ['', Validators.required],
    info: ['', Validators.required],
    locale: ['', Validators.required],
    date: ['', Validators.required],
    guestFee: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private eventService: EventServiceHttp) { }

  ngOnInit() {
  }

  onSubmit() {
    this.event.img = this.createEventForm.get('img').value;
    this.event.title = this.createEventForm.get('title').value;
    this.event.info = this.createEventForm.get('info').value;
    this.event.locale = this.createEventForm.get('locale').value;
    this.event.date =  this.createEventForm.get('date').value;
    this.event.guestFee = this.createEventForm.get('guestFee').value;
    // should perform validation here...
   if ( this.eventService.createNewEvent(this.event)) {
     this.eventCreated =  true;
   } else {
     // display error
   }
  }
}
