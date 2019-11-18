import { BookListComponent } from './components/book-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailedComponent } from './components/shared/book/book-detailed.component';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductTypeEnum } from './constants/product-type.enum';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BookAddComponent } from './components/shared/book-add/book-add.component';

export const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'books', component: BookListComponent,
    data: { title: 'books', productType: ProductTypeEnum.book },
    resolve: { books: ProductsResolver }
  },
  {
    path: 'notebooks', component: NotebookListComponent,
    data: { title: 'notebooks', productType: ProductTypeEnum.notebook },
    resolve: { notebooks: ProductsResolver }

  },
  { path: 'book-detailed/:id', component: BookDetailedComponent },
  {
    path: 'cart', component: ShoppingCartComponent,
    data: { title: 'cart' }
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'add-book', component: BookAddComponent,
    data: { title: 'Add Book' }
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },


];
