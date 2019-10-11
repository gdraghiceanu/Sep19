import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit {
  // metoda 1 nerecomandata
  // public noteBooks: NoteBook[];
  // productService = new ProductsService();
  // constructor() {
  //   this.noteBooks = this.productService.getNotebooks();
  // }

  public noteBooks: NoteBook[];
  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.noteBooks = this.productService.getNotebooks();
  }


  ngOnInit() {
  }
  addNotebookToCart(notebook: NoteBook) {
    this.shoppingCartService.addProduct(notebook);
  }

}
