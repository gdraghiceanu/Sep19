import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bootstrap } from "bootstrap";

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NotebookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
