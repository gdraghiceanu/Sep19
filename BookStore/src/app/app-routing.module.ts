import { BookListComponent } from './components/book-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailedComponent } from './components/shared/book/book-detailed.component';
import { ProductsResolver } from './resolvers/products.resolver';

export const appRoutes: Routes = [
  { path: 'home', component: BookListComponent, data: { title: 'home' } },
  { path: 'books', component: BookListComponent, data: { title: 'books' }, resolve: { bookedResolved: ProductsResolver} },
  { path: 'book-detailed/:id', component: BookDetailedComponent },
  { path: 'notebooks', component: NotebookListComponent, data: { title: 'notebooks' } },
  { path: 'cart', component: ShoppingCartComponent, data: { title: 'cart' } },
  { path: '**', component: BookListComponent }
];
