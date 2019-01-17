import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {HttpClient} from '@angular/common/http';
import {JwtService} from './jwt.service';
import {environment} from '../../environments/environment';
import {PlannedEvent} from '../model/planned-event';

@Injectable()
export class PlannedEventService {
  baseUrl: string;

  constructor(private http: HttpClient, private jwtService: JwtService) {
    this.baseUrl = environment.serverUrl + 'events/';
  }

  getAll(): Observable<PlannedEvent[]> {
    return this.http.get<PlannedEvent[]>(this.baseUrl);
  }
}
