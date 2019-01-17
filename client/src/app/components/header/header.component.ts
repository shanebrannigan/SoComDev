import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedOut = true;

  constructor(private router: Router, private employeeService: EmployeeService) {
    employeeService.currentEmployee
      .subscribe(employee => this.isLoggedOut = !employee);
  }

  ngOnInit() {
  }

  logout() {
    this.employeeService.logout();
    this.router.navigate(['/login']);
  }
}
