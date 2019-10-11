import { BookListComponent } from './components/product-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

export const appRoutes: Routes = [
  { path: 'home', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'notebooks', component: NotebookListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: BookListComponent }
];
