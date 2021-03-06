import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { StarComponent } from './components/shared/star/star.component';
import { BookComponent } from './components/shared/book/book.component';
import { ProductFilterComponent } from './components/shared/product-filter/product-filter.component';
import { NotebookListComponent } from './components/routes/notebook-list/notebook-list.component';
import { NotebookComponent } from './components/shared/notebook/notebook.component';
import { BookListComponent } from './components/routes/book-list/book-list.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductEditComponent } from './components/shared/product-edit/product-edit.component';
import { StarConvertPipe } from './pipes/starConvertor.pipe';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { CurrencyPipe } from '@angular/common';
import { HighLightDirective } from './directives/highLight.directive';
import { CountsDirective } from './directives/counts.directive';
import { BookDetailedComponent } from './components/routes/book-details/book-details.component';
import { HomeComponent } from './components/routes/home/home.component';
import { LoginComponent } from './components/routes/login/login.component';
import { NameNotAllowedDirective } from './directives/name-not-allowed.directive';
import { BookFormComponent } from './components/routes/book-form/book-form.component';
import { BookFormReactiveComponent } from './components/routes/book-form-reactive/book-form-reactive.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';

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
    HomeComponent,
    LoginComponent,
    NameNotAllowedDirective,
    BookFormComponent,
    BookFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    ShoppingCartService,
    CurrencyPipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
