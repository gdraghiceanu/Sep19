import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { StarComponent } from './components/shared/star/star.component';
import { BookComponent } from './components/shared/book/book.component';
import { ProductFilterComponent } from './components/shared/product-filter/product-filter.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NotebookComponent } from './components/shared/notebook/notebook.component';
import { BookListComponent } from './components/product-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent
   ],
  imports: [
    BrowserModule,
    FormsModule, 
    StarComponent,
    BookListComponent,    
    BookComponent,
    ProductFilterComponent,
    NotebookListComponent,
    NotebookComponent 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
