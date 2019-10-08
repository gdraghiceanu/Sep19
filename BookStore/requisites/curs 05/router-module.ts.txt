import { BookListComponent } from './components/product-list/book-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'notebooks', component: NotebookListComponent },
  { path: '**', component: BookListComponent }
];
