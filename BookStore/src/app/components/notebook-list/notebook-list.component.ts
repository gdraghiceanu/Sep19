import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { NoteBook } from 'src/app/interfaces/notebook';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit {
  public noteBooks: NoteBook[];

  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.getNotebooks();
  }

  ngOnInit() {
  }

  addNotebookToCart(notebook: NoteBook) {
    this.shoppingCartService.addProduct(notebook);
  }

  getNotebooks() {
    this.productService.getNotebooks().subscribe(notebooks => {
      this.noteBooks = notebooks;
    });
  }
}
