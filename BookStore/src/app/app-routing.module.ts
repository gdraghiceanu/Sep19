import { BookListComponent } from './components/product-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const appRoutes: Routes = [
  { path: 'home', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'notebooks', component: NotebookListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '**', component: BookListComponent }
];
