import { Component, OnInit } from '@angular/core';
import { books } from "src/app/Constants/books.seed";
import { employeeList } from "src/app/Constants/employees.seed";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  books = books;
  employeeList = employeeList;
  activeClassId = "initial";
  objectKeys = Object.keys;
  displayBookDetails(bookEmployeeId, goBack) {
    if (goBack) {
      this.activeClassId = "initial";
    } else {
      employeeList.forEach(employee => {
        if (employee.id === bookEmployeeId) {
          this.activeClassId = bookEmployeeId;
        }
      });
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
