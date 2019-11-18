import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { StarComponent } from './components/shared/star/star.component';
import { BookComponent } from './components/shared/book/book.component';
import { ProductFilterComponent } from './components/shared/product-filter/product-filter.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { NotebookComponent } from './components/shared/notebook/notebook.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductEditComponent } from './components/shared/product-edit/product-edit.component';
import { StarConvertPipe } from './pipes/starConvertor.pipe';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { CurrencyPipe } from '@angular/common';
import { HighLightDirective } from './directives/highLight.directive';
import { CountsDirective } from './directives/counts.directive';
import { BookDetailedComponent } from './components/shared/book/book-detailed.component';
import { BookAddComponent } from './components/shared/book-add/book-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NameNotAllowedDirective } from './directives/name-not-allowed.directive';
import { NameAllowedDirective } from './directives/name-allowed.directive';


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
    ShoppingCartComponent,
    ProductEditComponent,
    StarConvertPipe,
    MyCurrencyPipe,
    HighLightDirective,
    CountsDirective,
    BookDetailedComponent,
    BookAddComponent,
    HomeComponent,
    LoginComponent,
    NameNotAllowedDirective,
    NameAllowedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProductsService, ShoppingCartService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
