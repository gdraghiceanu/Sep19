import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { NoteBook } from 'src/app/interfaces/notebook';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { FilterService } from 'src/app/services/filter.service';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit {
  filteredNoteBook: NoteBook[];


  public noteBooks: NoteBook[] = [];

  private lastFilterValue: string;
  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private filterService: FilterService
  ) {
    // Metoda I
    // this.getNotebooks();
    // this.filterService.filterValue$.subscribe(
    //   value => {
    //     console.log('notebook filter change', value);
    //     this.lastFilterValue = value;

    //     this.produceFilterList(value);
    //   });


    //
    combineLatest(
      this.filterService.filterValue$,
      this.productService.getNotebooks()
      .pipe(tap(notebooks => {
        this.noteBooks = notebooks;
        this.filteredNoteBook = this.noteBooks;
      }))
    )
    .subscribe(
      ([value, books]) => {
        console.log('notebook filter change', value);
        this.lastFilterValue = value;

        this.produceFilterList(value);
      });

  }


  ngOnInit() {
  }
  addNotebookToCart(notebook: NoteBook) {
    this.shoppingCartService.addProduct(notebook);
  }
  private produceFilterList(filterValue: string): void {
    filterValue = filterValue.toLocaleLowerCase();
    this.filteredNoteBook = this.noteBooks.filter(
      filteredNoteBook => filteredNoteBook.title.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }


  getNotebooks() {
    this.productService.getNotebooks().subscribe(notebooks => {
      this.noteBooks = notebooks;
      this.filteredNoteBook = this.noteBooks;
      if (this.lastFilterValue) {
        this.produceFilterList(this.lastFilterValue);

      }
    });
  }


}
