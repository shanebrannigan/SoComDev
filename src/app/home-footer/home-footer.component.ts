import {Component, Input, OnInit} from '@angular/core';
import {LoginServiceHttp} from '../services/login-service-http';
import {EventServiceHttp} from '../services/event-service-http';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css'],
  providers: [EventServiceHttp]
})
export class HomeFooterComponent implements OnInit {

  @Input() displayAdminTools: boolean;
  @Input() uname: string;
  displaySettings = false;
  createEvent = false;
  editEvent = false;
  eventAttendance = false;
  constructor() {

  }
  ngOnInit() {
  }
  flip(input: boolean) {
    return !input;
  }
  showCreateEvent() {this.createEvent = this.flip(this.createEvent); }
  showEditCurrentEvent() {this.editEvent = this.flip(this.editEvent); }
  showExportEventAttendance() {this.eventAttendance = this.flip(this.eventAttendance); }
  unlockAdmin() {this.displaySettings = this.flip(this.displaySettings); }
}
