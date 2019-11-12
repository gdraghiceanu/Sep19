import { BookListComponent } from './components/book-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailedComponent } from './components/shared/book/book-detailed.component';
import { ProductsResolver } from './resolvers/products.resolver';
import { LoginComponent } from './components/shared/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { BookEditComponent } from './components/shared/book/book-edit.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'home' } },
  { path: 'books', component: BookListComponent, data: { title: 'books' },
          resolve: { bookedResolved: ProductsResolver}, canActivate: [AuthGuard] },
  { path: 'book-detailed/:id', component: BookDetailedComponent },
  { path: 'book/:id/edit', component: BookEditComponent},
  { path: 'notebooks', component: NotebookListComponent, data: { title: 'notebooks' }, canActivate: [AuthGuard] },
  { path: 'cart', component: ShoppingCartComponent, data: { title: 'cart' } },
  { path: 'login', component: LoginComponent, data: { title: 'cart' } },
  { path: '**', component: BookListComponent }
];
