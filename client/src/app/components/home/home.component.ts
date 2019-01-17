import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService) {
    // TODO: Replace with guard
    this.employeeService.isLoggedIn()
      .pipe(filter(x => !x))
      .subscribe(() => this.router.navigate(['/login']));
  }

  ngOnInit() {
  }
}
