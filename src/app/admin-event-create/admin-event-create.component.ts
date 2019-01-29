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
    if (this.eventService.createNewEvent(this.event)) {
     this.eventCreated = true;
    }
  }
}
