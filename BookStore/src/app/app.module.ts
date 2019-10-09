import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductListComponent } from './components/product-list/product-list.component';
import { StarComponent } from './components/shared/star.component';
import { ProductComponent } from './components/shared/product/product.component';
=======
import { StarComponent } from './components/shared/star/star.component';
import { BookComponent } from './components/shared/book/book.component';
import { ProductFilterComponent } from './components/shared/product-filter/product-filter.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NotebookComponent } from './components/shared/notebook/notebook.component';
import { BookListComponent } from './components/product-list/book-list.component';
>>>>>>> 635138cca61dd5953a4cc945c5aa6a8fe5758ee0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductListComponent,
    StarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    BookListComponent,
    StarComponent,
    BookComponent,
    ProductFilterComponent,
    NotebookListComponent,
    NotebookComponent
>>>>>>> 635138cca61dd5953a4cc945c5aa6a8fe5758ee0
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
