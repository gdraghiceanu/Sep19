import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/constants/books.seed';
<<<<<<< HEAD
=======

>>>>>>> 1e9bcae486024d6a0e6e3d232b58b78c08d712d1
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
<<<<<<< HEAD
  public books = books;
  
=======
  books = books;

>>>>>>> 1e9bcae486024d6a0e6e3d232b58b78c08d712d1
  constructor() { }

  ngOnInit() {
  }

}
