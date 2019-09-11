import { Component, OnInit } from '@angular/core';
import { employees } from 'src/app/constants/employees';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public employees = employees;
  constructor() { }

  ngOnInit() {
  }

}
