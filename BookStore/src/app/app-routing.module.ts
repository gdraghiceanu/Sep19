import { BookListComponent } from './components/routes/book-list/book-list.component';
import { NotebookListComponent } from './components/routes/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailedComponent } from './components/routes/book-details/book-details.component';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductTypeEnum } from './constants/product-type.enum';
import { HomeComponent } from './components/routes/home/home.component';
import { LoginComponent } from './components/routes/login/login.component';
import { BookFormComponent } from './components/routes/book-form/book-form.component';
import { BookFormReactiveComponent } from './components/routes/book-form-reactive/book-form-reactive.component';
import { LeaveBookFormGuard } from './guards/leave-book-form.guard';
import { AuthGuard } from './guards/authorization.guard';

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
    path: 'book-form/:id',
    component: BookFormComponent,
    canDeactivate: [LeaveBookFormGuard],
    canActivate: [AuthGuard]
  },
  { path: 'book-form-reactive/:id', component: BookFormReactiveComponent },
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
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
