import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bootstrap } from "bootstrap";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NotebookListComponent } from './components/notebook-list/notebook-list.component';
import { StarComponent } from './components/shared/star.component';
import { ItemnotebookComponent } from './components/shared/itemnotebook.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NotebookListComponent,
    StarComponent,
    ItemnotebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
