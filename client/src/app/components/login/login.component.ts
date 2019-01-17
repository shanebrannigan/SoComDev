import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {filter, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeId = '';
  password = '';
  isValid = true;
  isBusy = false;

  private submitted = false;

  constructor(private router: Router, private employeeService: EmployeeService) {
    // TODO: Replace with guard
    this.employeeService.isLoggedIn()
      .pipe(filter(x => x))
      .subscribe(() => this.router.navigate(['/home']));
  }

  ngOnInit() {
  }

  login() {
    this.isBusy = true;
    this.employeeService.login(this.employeeId, this.password)
      .pipe(finalize(() => this.isBusy = false))
      .subscribe(success => {
        this.isValid = success;
        if (success) {
          this.router.navigate(['/home']);
        }
      });
  }
}
