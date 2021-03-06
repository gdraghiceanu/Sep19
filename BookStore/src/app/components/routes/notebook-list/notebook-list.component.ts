import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { NoteBook } from 'src/app/interfaces/notebook';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';
import { combineLatest, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit, OnDestroy {
 
  filteredNotebooks: NoteBook[];
  private subcribtion: Subscription;

  private notebooks: NoteBook[];

  constructor(
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) {
    this.notebooks = this.route.snapshot.data.notebooks;
    this.filteredNotebooks = this.route.snapshot.data.notebooks;

    this.subcribtion = this.filterService.filterValue$.subscribe(
      value => {
        this.produceFilterList(value);
        console.log('filter changed');
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subcribtion.unsubscribe();
  }

  addNotebookToCart(notebook: NoteBook) {
    this.shoppingCartService.sendProductToCart(notebook);
  }

  getNotebooks() {
    combineLatest(
      this.filterService.filterValue$,
      this.productService.getNotebooks(true)
    ).pipe(
      first()
    ).subscribe(([filterValue, notebooks]) => {
      this.notebooks = notebooks;
      this.filteredNotebooks = notebooks;
      this.produceFilterList(filterValue);
    });
  }

  private produceFilterList(filterValue: string): void {
    filterValue = filterValue.toLocaleLowerCase();
    this.filteredNotebooks = this.notebooks.filter(
      book => book.title.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }
}
