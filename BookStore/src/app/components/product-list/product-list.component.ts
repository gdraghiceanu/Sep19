import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/constants/books.seed';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public books = books;
  
  constructor() { }

  ngOnInit() {
  }

}
