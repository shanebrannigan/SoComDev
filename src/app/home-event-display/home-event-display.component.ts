import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-event-display',
  templateUrl: './home-event-display.component.html',
  styleUrls: ['./home-event-display.component.css']
})
export class HomeEventDisplayComponent implements OnInit {

  events: Event[];

  constructor() {
  }

  ngOnInit() {
  }
}
