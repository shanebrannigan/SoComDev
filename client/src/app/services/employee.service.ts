import {JwtService} from './jwt.service';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Employee} from '../model/employee';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {LoginResponse} from '../model/login-response';


@Injectable()
export class EmployeeService {
  baseUrl: string;
  isInitialised: boolean;
  private _isLoggedIn = false;
  private employeeSubject = new BehaviorSubject<Employee>(null);
  _currentEmployee: Employee;

  constructor(private http: HttpClient, private jwtService: JwtService) {
    this.baseUrl = environment.serverUrl + 'employee/';
    this.refreshEmployee().subscribe();
  }

  get currentEmployee(): Observable<Employee> {
    return this.employeeSubject;
  }

  isLoggedIn(): Observable<boolean> {
    if (!this._isLoggedIn && !this.isInitialised) {
      return this.refreshEmployee()
        .pipe(
          map(x => this._isLoggedIn),
          catchError(error => of(false)));
    }
    return this.currentEmployee.pipe(map(x => this._isLoggedIn));
  }

  login(employeeId: string, password: string): Observable<boolean> {
    return this.http.post<LoginResponse>(this.baseUrl + 'login', {
        employeeId,
        password
      }
    ).pipe(
      tap(response => {
        if (response.success) {
          this._currentEmployee = response.employee;
          this.employeeSubject.next(this._currentEmployee);
          this.jwtService.set(response.token);
          this._isLoggedIn = true;
        } else {
          this.logout();
        }
      }),
      map(response => response.success));
  }

  logout() {
    this._isLoggedIn = false;
    this._currentEmployee = null;
    this.employeeSubject.next(this._currentEmployee);
    this.jwtService.clear();
  }

  public refreshEmployee(): Observable<boolean> {
    return this.http.get<Employee>(this.baseUrl + 'current')
      .pipe(
        tap(response => {
            if (response === null) {
              this.logout();
            } else {
              this._currentEmployee = response;
              this.employeeSubject.next(this._currentEmployee);
              this._isLoggedIn = true;
              this.isInitialised = true;
            }
          }
        ),
        mapTo(true),
        catchError(error => of(false)));
  }
}

