import { Component, OnInit } from '@angular/core';
import {PlannedEventService} from '../../services/planned-event.service';
import {PlannedEvent} from '../../model/planned-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: PlannedEvent[] = [];

  constructor(private eventsService: PlannedEventService) {
    this.initialise();
  }

  ngOnInit() {
  }

  private initialise() {
    this.eventsService.getAll().subscribe(events => this.events = events);
  }
}
