import { BookListComponent } from './components/product-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const appRoutes: Routes = [
  { path: 'home', component: BookListComponent, data: { title: 'home' } },
  { path: 'books', component: BookListComponent, data: { title: 'books' } },
  { path: 'notebooks', component: NotebookListComponent, data: { title: 'notebooks' } },
  { path: 'cart', component: ShoppingCartComponent, data: { title: 'cart' } },
  { path: '**', component: BookListComponent }
];
