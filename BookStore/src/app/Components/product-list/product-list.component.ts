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
  toggleDetailsScreen = false;
  displayBookDetails(bookEmployeeId, goBack,rating) {
    if (goBack) {
      this.activeClassId = "initial";
      books.forEach(book => {
        if (book.id === bookEmployeeId) {
          book.rating = rating;
        }
      });
    } else {
      employeeList.forEach(employee => {
        if (employee.id === bookEmployeeId) {
          this.activeClassId = bookEmployeeId;
        }
      });
    }
  }
  toggleDetails(toggleDetailsScreen) {
    this.toggleDetailsScreen = !toggleDetailsScreen;
  }
  
  constructor() {
     }
  
  ngOnInit() {
  }

}

