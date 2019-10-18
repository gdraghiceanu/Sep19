import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { StarComponent } from './components/shared/star/star.component';
import { BookComponent } from './components/shared/book/book.component';
import { ProductFilterComponent } from './components/shared/product-filter/product-filter.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NotebookComponent } from './components/shared/notebook/notebook.component';
import { BookListComponent } from './components/product-list/book-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsService } from './services/products.service';
import { ShoppingCartService} from './services/shopping-cart.service';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './components/shared/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    StarComponent,
    BookComponent,
    ProductFilterComponent,
    NotebookListComponent,
    NotebookComponent,
    NavbarComponent,
    CartComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
